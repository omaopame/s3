npm install --save-dev webpack
# npm install --save-dev path-browserify
cd javascriptv3/s3-put-read-list-obj
node_modules/.bin/webpack src/dynamoApp/add_data.js --mode development --target web --devtool false -o src/dynamoApp/main.js
