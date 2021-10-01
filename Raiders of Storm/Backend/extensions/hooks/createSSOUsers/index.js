//const whitelistedDomains = ["..."];

module.exports = function registerHook({ services, database, getSchema }) {
  const { UsersService } = services;
  return {
    "oauth.*.login.before": async function (oauthProfile) {
      console.log("oauth.*.login.before");
      console.log("oauthProfile: ", oauthProfile);
      let profile = oauthProfile.profile;

      if(profile.error){
        console.log("There is an error while login in");
        return;
      }

      const { email } = profile;
      const schema = await getSchema();
      const usersService = new UsersService({
        schema,
        knex: database
      });

      //const emailDomainIsWhitelisted = whitelistedDomains.some((d) =>
      //  email.includes(d)
      //);
      //if (!emailDomainIsWhitelisted) return;

      const existingUser = await database("directus_users")
        .where({ email })
        .first();
      if (existingUser) return;

      await usersService.createOne({
        email: email,
        password: "abcd",
        role: "fb9abf85-024b-4ea2-a088-a6183b267041"
      });
    }
  };
};
