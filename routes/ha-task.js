const express = require("express");
const router = express.Router();
const Mock = require("mockjs");

router.post("/haTask/page", (req, res, next) => {
  const mockData = Mock.mock({
    [`content|${req.query.pageSize}`]: [
      {
        "btnFlowDetail|0-1": 1,
        "btnPushEvent|0-1": 1,
        "btnReStart|0-1": 1,
        "btnStart|0-1": 1,
        "btnStop|0-1": 1,
        createdDate: "@datetime",
        deskId: "@guid",
        "linkId|1000-9999": 1000,
        "retryTimes|0-10": 0,
        "status|1": ["pending", "running", "stopped", "completed"],
        "taskId|1000-9999": 1000,
        "taskType|1": ["初始化同步链路", "启动同步", "暂停同步", "重启同步任务", "重装同步任务", "故障切换", "故障回切", "变更策略", "变更带宽", "退订", "磁盘资源变更"],
        version: "@float(0, 10, 0, 1)",
        "workFlowInstanceId|1000-9999": 1000,
        workFlowKey: "@word",
      },
    ],
    size: 10,
    total: 999,
  });

  setTimeout(() => {
    res.send({
      code: 0,
      data: mockData,
    });
  }, 1000);
});

router.get("/haTask/taskTypeList", (req, res, next) => {
  const mockData = Mock.mock({
    code: 0,
    "data|5-10": [
      {
        desc: "@sentence",
        value: "@integer(1, 100)",
      },
    ],
  });
  setTimeout(() => {
    res.send(mockData);
  }, 1000);
});

router.get("/haTask/taskStatusList", (req, res, next) => {
  const mockData = Mock.mock({
    "data|5-10": [
      {
        desc: "@sentence",
        value: "@integer(1, 100)",
      },
    ],
  });
  setTimeout(() => {
    res.send(mockData);
  }, 1000);
});

router.post("/haTask/flowDetail", (req, res, next) => {
  const mockData = Mock.mock({
    [`content|${req.query.pageSize}`]: [
      {
        desc: "@cparagraph",
        endDate: '@datetime("yyyy-MM-dd HH:mm:ss")',
        flowName: "@ctitle(5, 10)",
        id: "@increment",
        nodeKey: "@word(5, 10)",
        output: "@cparagraph",
        retry: "@integer(0, 10)",
        startDate: '@datetime("yyyy-MM-dd HH:mm:ss")',
        "status|1": ["pending", "success", "failed"],
        timeConsuming: "@integer(1, 100)",
        waitSeconds: "@integer(1, 60)",
      },
    ],
    size: 10,
    total: 999,
  });

  setTimeout(() => {
    res.send({
      code: 0,
      data: mockData,
    });
  }, 1000);
});

module.exports = router;
