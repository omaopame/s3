npm install --save-dev webpack
# npm install --save-dev path-browserify
node_modules/.bin/webpack src/dynamoApp/add_data.js --mode development --target web --devtool false -o src/dynamoApp/main.js
