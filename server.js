import app from "./app.js";
import http from "http";
import setupSwagger from "./docs/swagger.js";
const port = process.env.PORT || 8000;

const server = http.createServer(app);
setupSwagger(app);
server.listen(port, () => {
  console.log(`server runs on http://localhost:${port}`);
});
