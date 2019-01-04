
#Homework Assignment #1
####Updated: 1/4/2019

This is the first of several homework assignments you'll receive in this course. In order to receive your certificate of completion (at the end of this course you must complete all the assignments and receive a passing grade. 

##Hello Api
###Install and Run it
Clone repository and run the node command in the terminal:
```
node index
```
###To set up https server first you will need to run the next command under api/servers/secure, to generate the key.pem and cert.pem
```
openssl  req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

###You should see the message that the server is running:
```
HTTP server initialized in staging mode
The HTTP server is listening on port 3000 now
HTTPS Server initialized in staging mode
The HTTPS Server is listening on port 3001 now
```

Open Postman and navigate to http://localhost:3000/hello. You should see:
```
{
    "message": "Hi, How are you?, I don't know your name, can you tell me, by using '/hello?name=Name' or post { name: 'Name'}"
}
```

When you POST an object with a name property, like this:
```
{
    "name": "Name"
}

```

This will show the message:
```
{
    "message": "Hello Name!"
}
```

When you add a QUERYSTRING parameter name it will return like: 

```
{
    "message": "Hello Frank!"
}
```