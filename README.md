# React Imgur Project
* show gallery images in a grid of thumbnails
* show image description in the thumbnail, top or bottom;
* allow selecting the gallery section: hot, top, user;
* allow specifying window and sort parameters;

## Approach
* uses `create-react-app` to bootstrap the project
* `fetchImages` service function is used to make an API call to Imgur server to fetch gallery images
-- uses `Client-ID` acquired after registering the app via Imgur. This acts as public key
* Created couple of components namely `Image` and `Dropdown`
-- `Dropdown` components content is defined in json file which will be dynamically fetch as per the loop
-- `Prop-types` is used to type check the props
* Uses `Redux/toolkit` as the state management library to maintain a state in central form and uses actions to dispatch event
* Uses vanilla CSS for styling with flexbox
* For code standards and formatting - ESLint and Prettier is used

## Setup
Download or Clone the repository
```sh
git clone https://github.com/gitneeraj/react-imgur-project.git
```
Change directory to the cloned repo and install dependencies
```sh
cd react-imgur-project
npm i
```
To start the development server
```sh
npm start
```
Since imgur API won't work well with `http://localhost` and slight modification is made to the start up script
`react-scripts start --host 0.0.0.0`

Hence server will start at `http://0.0.0.0:3000/`


