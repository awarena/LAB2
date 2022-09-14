const connect = require('connect');
const app = connect();
function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};
function bye(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bye World');
};
app.use("/hello", helloWorld);
app.use("/goodbye", bye);
app.listen(3000);
console.log('Server running at http://localhost:3000/');
