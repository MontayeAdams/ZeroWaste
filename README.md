# ZeroWaste
GitHub repository for ZeroWaste

DEV Terminal Codes to download:

React Native: 

(every import statement you see in the client folder codes (index.js, App.js, etc. is something that you may need to install)
- npm install
- npm install @react-navigation/stack
- npm install @react-navigation/native-stack
- npm install @react-navigation/bottom-tabs

MongoDB:

(first install Homebrew, then do the following)
- brew tap mongodb/brew
- brew update
- brew install mongodb-community@7.0
  
(you will need to start MongoDB first in order for the server to connect to the database)
- brew services start mongodb-community@7.0

Database Connection (keep all these terminals running at the same time): 

in client folder (in another terminal):
- lt --port 8000
- paste URL into config.js file and put /api after it
- go to the URL in a web browser, follow the steps to allow access

in client folder (in another terminal):
- npm start

in server folder (in another terminal):
- npm start
- should say "db connected" if no errors






