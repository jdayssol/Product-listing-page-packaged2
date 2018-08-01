#  Content:
This product page is a tv-show store, where you can buy your favorites show in 4k-BlueRay.

## Functionnalities
He provide this functionnalities:
  - endless scrolling : The page load the 4 first shows, when you scroll to the end of the page, it load the next one.
  - hover functionality on a product providing additional information like color variations etc: When you hover the poster of the show, the full description is showed
  - a dummy filter functionality (e.g. after brand and color): You can search shows by their title

I also add extra functionnality :
  - router: you can navigate from the list page to the cart page.
  - cart : you can add your shows in the cart, and see it in the cart page.
  - mock of data : the data are loaded from a json file ( src / assets / mockdata.json) , and provide a lot of information : images / genres / date of creation / description.

## Programming conception
I create my project using vue-cli, so it use principles of modern, state-of-the-art webdesign. I use tool like npm, node, sass, unit for test.
Also with vue, the components can be reused and the site can grow without difficulties.
I use SASS to generate the css/app.css file. The color of the text and the font are now variable in the sass file ( src / sass / app.scss )

## How to use sass
To use sass, install sass using npm npm install -g sass then use sass --watch src/sass:src/css to generate the app.css file.

## How to run the server :
To run the dev site, use the command npm run serve.
To run the production site, you need to deploy the dist directory in a htpp server.
For example, you can install serve with npm install -g serve, then use the command "serve -s dist"

# product-listing-page
## Project setup
npm install
### Compiles and hot-reloads for development
npm run serve
### Compiles and minifies for production
npm run build
### Lints and fixes files
npm run lint
### Run your unit tests
npm run test:unit
