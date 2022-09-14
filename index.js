const connect = require('connect');
const app = connect();
function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};
app.use("/hello", helloWorld);
app.use("/goodbye", helloWorld);
app.listen(3000);
console.log('Server running at http://localhost:3000/');
