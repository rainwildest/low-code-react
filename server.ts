import express from "express";
import next from "next";

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  //加载指定目录静态资源
  server.use(express.static(__dirname + "/.next"));

  // //配置任何请求都转到index.html，而index.html会根据React-Router规则去匹配任何一个route
  // server.get("*", function (request, response) {
  //   response.sendFile(path.resolve(__dirname, "dist", "index.html"));
  // });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const response = server.listen(port, () => {
    console.log("\x1B[32m%s\x1b[0m", "ready", "-", `http://localhost:${port}`);
  });

  const io = require("socket.io")(response, { cors: true });

  io.on("connect", (socket: any) => {
    socket.on("clientOnline", () => {
      console.log("用户上线了");
    });
    socket.on("disconnect", () => {
      console.log("用户关闭了");
    });

    // 广播通知
    socket.on("notification", (data: string) => {
      socket.broadcast.emit("notification", {
        message: data
      });
    });
  });
});
