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
    curl --header "Content-Type: application/json"   
    --request POST   
    --data '{"username":"xyz","password":"xyz"}'   http://10.0.0.55:3000/api/post
                
        
            



### This is me following along nishant-666 (link below). I will be adding on more to this project. Maybe a front-end and more data.
### Here is nishants-666 github link https://github.com/nishant-666/Rest-Api-Express-MongoDB/tree/master
### Link to freecodecamp.com site: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb