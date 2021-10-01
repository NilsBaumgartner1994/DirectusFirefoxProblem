# Server-Toplevel-Proxy

## About

When you want to deploy multiple services and you want them to be reached from outside but over http (port 80) this can be very frustrating to setup all redirects. This is where nginx-proxy suites perfect. This is a simple template and explanation.


## Configuration

1. Start the nginx-proxy with this ```docker-compose.yaml``` (```> docker-compose up```).


2. Register your service. The proxy will listen on new added containers in the network.

If you want to add your container to the Proxy its very simple. You can also see an example in the folder: ```behindProxyTest```

An example for your ```docker-compose.yaml```
In this example our hostmachine is reachable at: ```192.168.178.35``` and we want reach our ```exampleService``` at the subroute ```/api```.
So a client can now reach our service with: ```http://192.168.178.35/api```

```
  exampleService:
    ...
    environment:
      - VIRTUAL_HOST=192.168.178.35
      - VIRTUAL_PATH=/api
    networks:
      - topDomainProxy


networks:
  topDomainProxy:
    external: true
```

If you want your service to get rid of the subdirectory (in this example /api), then you can also add: ```VIRTUAL_DEST=/``` so that your service gets the subdirectory removed. 

## Documentation

This project is setup by following the tutorial from the original developers.

https://github.com/nginx-proxy/nginx-proxy