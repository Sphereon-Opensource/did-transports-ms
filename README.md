# DID-Transports ms
The DID-Transports ms forwards [uPort Disclosure Requests](https://developer.uport.me/messages/sharereq) to a mobile phone by making use of `pushTokens`.  

## Calls

### Login
Example request:  
```bash
curl localhost:3000/login -H 'Content-type: application/json' \
-d '{
            "jwt": "jot",
            "pushToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE1NzI4ODE3MTksImV4cCI6MTYwNDQxNzcxOSwiYXVkIjoiZGlkOmV0aHI6MHg4OGVkNjk0ZmZlOTI0NGUyOTkzZDI5MzI2MzhhNWM3MzYzNzFmYzA0IiwidHlwZSI6Im5vdGlmaWNhdGlvbnMiLCJ2YWx1ZSI6ImFybjphd3M6c25zOnVzLXdlc3QtMjoxMTMxOTYyMTY1NTg6ZW5kcG9pbnQvR0NNL3VQb3J0LzMzYTA5Y2U4LWZjNzMtMzYxZS04NGM2LTg3NzE1YTNlNGI1ZCIsImlzcyI6ImRpZDpldGhyOjB4NmQwOWIwM2QzMTEzZGIwOTg5YWJjZThlMmQ0Y2JmMDNiN2Q4OTA3OSJ9.8IFyb4AwucrVtaWVyeEbap-VN-MTQ8RiXZagjV-nhCh1b2dWDiYvesQtHe_oYu0bNXETzOQxbjC5AjWgUGDOXAA",
            "boxPub": "SfCVfkLpffVqGVo97uzlKPvskx5tHNrSHxRrQ/cMgyg="        
}'
```
Example response:
```json
"OK"
```

## Commands
To start the server run `npm start`.  
The tests can be ran using `npm test`.  

## Dependabot usage
All pull requests opened by dependabot should be reviewed before merging:
* Run all tests, fix failing tests
* Run the project to see if it still works correctly
