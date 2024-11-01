const http = require("http");
const routes = require("./routes");
// the request listener is a function that will be called when a request is received
const server = http.createServer(routes);
server.listen(3000);
