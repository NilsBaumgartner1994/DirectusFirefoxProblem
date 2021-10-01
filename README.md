Server-Toplevel-Proxy
	docker-compose.yaml
		 - DEFAULT_HOST=192.168.178.35 --> Edit


SSO-Stud.IP-UOS
	.env
		HOST --> Edit


Raiders of Storm
	.env
		HOST --> Edit
		OAUTH_STUDIP_URL --> Edit


docker-compose up all three
	The custom SSO takes the longest time

If Frontend hangs
	go to SSO-Stud.IP-UOS/Frontend/app/
	npm install yourself


to check if routing is working properly call:
	http://192.168.178.35/myapp/whoami
	
	http://192.168.178.35/studip/api/authParams