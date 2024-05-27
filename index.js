const express = require("express");
const app = express();
const sandbox = require("./routes/sandbox");
const ha_desk = require("./routes/ha-desktop.js");
const ha_task = require("./routes/ha-task.js");
const ha_mid_desk = require("./routes/ha-midDesk");

// 待办： 添加数据库 模拟更多真实请求（具有存储功能
// 待办：MVC框架了解，整理
// 待办：添加ts实践
// 待办：不同的router分类
// 待办：封装统一的接口 把code 封装一遍

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

// app.set 配置app身上的变量
// app.use 中间件配置

// 使用 express.json() 来解析 application/json 类型的请求体
app.use(express.json());

// 翼沙箱
app.use("/api/sandboxserv/mgr/strategy", sandbox);

// 个性版桌面
app.use("/api/paas-mgr/HACDDTS/hacddts/desk", ha_desk);

// 任务流程管理
app.use("/api/paas-mgr/HACDDTS/hacddts/task", ha_task);

// 中间桌面
app.use("/api/paas-mgr/HACDDTS/hacddts/hacddtsMidDesk", ha_mid_desk);

app.listen(3000, () => {
  console.log("监听端口 3000");
});
