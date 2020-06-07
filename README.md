## npx create-react-app .
Windows 10 CMD terminal can do but in Window 7 it can not.

## npm root -g
check out global modules see if there is a nodemon

## npm install -g nodemon
This is global so you do not need --save

## npm install -g live-server
to start server go the the folder that has index.html
give command
folder>live-server

## npm list --depth 1
to show installed modules in your project

## cd portfolio
cd into portfolio to check installation using npm start

## npm start
in package.json file in script section
when user put start there is file location to start the app
and also compatible with main section
if there is others like server int the script section to run
<h3> npm run server </h3>

## npm install sticky-kit --save
didn't fix

## Creat git repository
https://github.com/kingdavid72/choiportfolio.git

## npm install gh-pages
This installs GithHub gh-pages branch under the master branch
so you have to creat repo and will be added to package.json

## Edit package.json to add hompage
Insert right after private
"homepage": "https://github.com/kingdavid72/portfilio-choi.git",
make sure comma { , , ,}

## Edit script section
"deploy": "gh-pages -d build"
build directory will be created by npm run build command
directory option for app directory to deploy

## Creat .gitignore file
you don't want to push node_modues folder

## git init
to initialize the folder. this will make .git hidden folder
Reinitialized existing Git repository in E:/Code_snips/02-profilewebsite/portfolio/.git/

## Git golobal setup
git config --global user.email jaemunc@gmail.com
git config --global user.name kingdavid72
confirm by git config --list

## git add .
Add every files in current foler into staging area
git status will show the files added

## git commit -m "Initial commitment"
First commit of chaninges confirmed

## git remote add origin https://github.com/kingdavid72/portfilio-choi.git
This will add remote repository called origin in that address
add remote repository if it is a first time it will ask crediential

## git push -u origin master
git push -u origin master
meaning push with recording flag (-u) to remote server called origin given by GitHub server
into master branch.

## npm run build
For React application nodejs will creat /build directory and it must be built before deploy
or one can add "npm run build && gh-pages -d build" in this case one can directly go to 
deploy command skkipping this step

## npm run deploy
This command will make gh-pages under master branch









This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
