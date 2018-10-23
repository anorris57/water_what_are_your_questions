# water_what_are_your_questions
Final MERN stack project: Home work site focused on chemistry of water (various properties).

Getting Started w/Backend (Express):
Backend dependencies:(Must have nodejs installed on your computor)
bcryptjs, 
body-parser, 
concurrently, 
express, 
gravatar, 
jasonwebtoken, 
mongoose (mLab is used for set up of MongoDB), 
passport,
passport-jwt,
validator

Backend installation:
1. Set up MongoDB with mLab
   Explanation:
   allows for use on MongoDB across various platforms
2. In *terminal run: npm init 
   Explanation: sets up package.json (main is server.js)
3. In terminal run: npm i express mongoose passport passport-jwt jasonwebtoken body-parser bcryptjs validator
   Explanation:
   express: main framework
   mongoose: used to connect and interact with MongoDB
   passport: used for authenication
   passport-jwt: used for the jasonwebtoken strategy
   jsonwebtoken: generates token
   body-parser: takes in data from request (request.body)
   bcryptjs: used to hash and salt password
   validator: used for validation
4. Optional: In terminal run npm i -D nodemon
   Explanation: will update app without manually having to restart 

Getting Started w/Frontend (React):
Frontend dependecies:
axios, 
classnames,
jwt-decode,
react, 
react-dom,
react-redux,
react-router-dom,
react-scripts,
redux, 
redux-thunk

Frontend installation:
1. In terminal run: npm i -g create-react-app
2. In terminal run: create-react-app client

   Explanation:
   create-react-app sets up boiler plate for react with out having to configure webpack
   create-react-app client is creating a seperate(from backend) react app folder called client
   The following dependencies: react, react-dom, and react-scripts and
   scripts: react-scripts start, react-scripts build, react-scripts test, and react-scripts eject
   are added by create-react-app (Note there may be more depending on version)

3. added package.json for client: "proxy": "http://localhost:5000"
   Explanation: this allows axios(ajax calls) to be made without having to type out this beginning part over and over.

4. Optional: cd into root directory and go to package.json (make sure this is the package.json for your backend). In terminal run: npm i concurrently
    Explanation: this allows you to run a script and have multiple commands such starting backend server on port 5000 and frontend on port 3000 (see package.json for further scripts)

5. Add bootstrap CDN to index html file in client 

6. Optional: If using Google Chrome add react and redux developer tool extensions.
   Explanation: Allows you see your components and state as you develop.

7. Add fontawesone cdn to index.html

8. In the terminal cd into the client folder and run npm i react-router-dom
   Explanation: react-router gives the abilty to navigate to different components based on the url (go to multiple routes).

9. In the terminal cd into the client folder and run npm i axios 
   Explanation: axios is used as the http client that will communicate with the backend and used only for testing purposes. It will be eventually be removed.

10. In the client folder terminal run npm i classnames
    Explanation:  classnames gives the ability to have variable classname attributes (show certain links for signed in users verses  guests)












*terminal is referring to the command line interface (cli)