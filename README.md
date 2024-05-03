# mongoexpress app

## My Notes
## project dependencies
### Express - middleware for creating CRUD endpoints
    - allows for endpoints such as mysite.exa/api/getAllUsers
### Mongoose - will make calls to MongoDB database to retrive data
    - Here is an interesting article that explains how mongoose npm package is used to abstract away NodeJS TCP calls to mongoDB server.
    - https://www.freecodecamp.org/news/mongodb-mongoose-node-tutorial
### Nodemon - will automatically restart node app when file change are detected in project
### Dotenv - is a zero-dependancy module that loads environments variables from a .env file into process.env
    - storing configurations in environment seperate from code is based on Twelve Factor App methodology
    - The twelve-factory app 
        - A methodology for building software-as-a-service app
            - use declarative formats to make easier to understand 
                - Declarative programming: programming paradigm that empahsises what a program should do rather 
                    than how to do it. kinda like db.client.findall()

# curl commands for testing webapp
## will post {name, age} to DB
    curl --header "Content-Type: application/json" --request POST --data '{"name":"Carlos","age":"80"}' http://10.0.0.55:3000/api/post

    curl -X POST -H "Content-Type: application/json" -d '{"name": "Carlos", "age": "80"}' http://10.0.0.55:3000/api/post
## will get all name and age from DB   
    curl http://10.0.0.55:3000/api/getall
## will get name-age from db using ID
    curl http://10.0.0.55:3000/api/getOne/6628365c9c80f8cbac282d97
## Patch by id
    curl --header "Content-Type: application/json" --request PATCH --data '{"name":"Carlos","age":"80"}' http://10.0.0.55:3000/api/update/6628365c9c80f8cbac282d97

    curl -X PATCH -H "Content-Type: application/json" -d '{"name": "Carlos331", "age": "10"}' http://10.0.0.55:3000/api/update/6628365c9c80f8cbac282d97

## delete by ID
    curl -X DELETE http://10.0.0.55:3000/api/delete/6628375729ed830c6950ff52


# Mongoose Schemasa allowed data types:
    String
    Number
    Date
    Buffer
    Boolean
    Mixed
    ObjectId
    Array
    Decimal128
    Map  

# mongoose quirks, hahaa
    I noticed that my Schema in mongoDB was changed to "datas", even though it was named "Data" in ./model/model.js . I was really confused, but apparently, mongoose will turn your schema name into lower case and make it plural. Ha!


# Links
- This is me following along nishant-666 (link below). I will be adding on more to this project. Maybe a front-end and more data.
- Here is nishants-666 github link https://github.com/nishant-666/Rest-Api-Express-MongoDB/tree/master
- Link to freecodecamp.com site: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb
- Link to mongoose-express article: https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/