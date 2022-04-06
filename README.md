# Hide API key template

if you include your API key in the frontend (even "hidden" in a .env file, it can be found in the developer tools in main.static).

If starting from scratch, make sure you run npm install. If adding to an existing project, just make sure that you add
```
    "axios": "^0.26.1",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
```

to your `package.jason` file. Alternatively, just run

`npm i axios express cors dotenv` (that way you get the latest version of each)

This is the barebones to hide your API key in the backend and decrease chances of abuse.
You can fit this easily in your REACT App. Just include the given files in the right locations.
Consult express and axios documentation for expanded use.
Make sure you have nodemon installed

Backend is setup in `index.js`. A basic example of how to call it from your REACT app is in `src/App.js`

You need to run both your front and backend for it to work. Modify your `package.json` as follow:

add `"start:backend"` and change `start` to `"start:frontend"`

```
"scripts": {
    "start:backend": "nodemon index.js",
    "start:frontend": "react-scripts start",
    ...
```
