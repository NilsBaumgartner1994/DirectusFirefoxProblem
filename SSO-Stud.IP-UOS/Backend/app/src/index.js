/* istanbul ignore file */
import {SsoAuth2Server} from 'sso-oauth2-server';
import {FakeBackend, Connector, UrlHelper} from 'studip-api';

const usernameLabel = "RZ-Kennung";
const passwordLabel = "RZ-Password";

const requiredLoginParams = {
  [usernameLabel]: 'string',
  [passwordLabel]: 'password',
};

const STUDIP_AUTH_METHOD = async (body, client_id, scope, query) => {
  const username = body[usernameLabel];
  const password = body[passwordLabel];

  const domain = UrlHelper.STUDIP_DOMAIN_UNI_OSNABRUECK;

  try {
    const user = FakeBackend.getRawExampleUser();
    return user;
  } catch (err) {
    console.log('Authentification: error');
    console.log(err);
    throw new Error('Credentails incorrect');
  }
};

const redirectMode = false;
const port = 3010;
const route = '';
const sessionSecret = 'keyboard cat';
const jwtSecret = 'MySuperSecret';
const ssoServer = new SsoAuth2Server(
  redirectMode,
  port,
  route,
  sessionSecret,
  jwtSecret,
  STUDIP_AUTH_METHOD,
  requiredLoginParams
);

console.log("Register Public SSO");
ssoServer.registerService("public", "sso_consumer", "l1Q7zkOL59cRqWBkQ12ZiGVW2DBL");

ssoServer.start();

