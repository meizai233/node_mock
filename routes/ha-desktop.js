const express = require("express");
const router = express.Router();
const Mock = require("mockjs");

router.post("/queryDesks", (req, res, next) => {
  const data = Mock.mock({
    [`content|${req.query.pageSize}`]: [
      {
        deskId: "@integer(1000, 9999)", // 生成随机的 4 位整数
        osType: '@string("upper", 5)', // 生成长度为 5 的随机大写字母字符串
        poolName: "@cname", // 生成随机的中文名
        runState: '@pick(["initializing", "normal", "syncPaused", "lowBandwidth", "faultChanging", "usingShadowDesk", "faultRestore", "linkException", "syncException"])', // 从数组中随机选择一个值
        targetPoolName: "@cname",
        link: "正在初始化",
        mainDesk: "@ip",
        mainVersion: "@string",
        mainStatus: "@string",
        mediateDesk: "@ip",
        mediateVersion: "@string",
        mediateStatus: "@string",
        spareVersion: "@string",
        spareStatus: "@string",
        isExpand: "@boolean", // 随机生成布尔值
        desktopName: "@string",
      },
    ],
    size: 10,
    total: 999,
  });

  data.content.forEach((d) => (d.runStateName = d.runState));

  res.send({
    code: 0,
    data: data,
  });
});

router.get("/queryDeskInfo", (req, res, next) => {
  const sysDisk = {
    type: 1,
    delayms: "@natural(1, 100)ms",
    bandwidthArg: "@float(0, 100, 2, 2)Mbit/s",
    bandwidthMax: "@float(0, 100, 2, 2)Mbit/s",
  };

  const dataDisk = {
    type: 2,
    strategyName: "@word",
    // diskUuid 字段，随机生成一个字符串
    diskUuid: "@guid",
    // delayms 字段，随机生成一个范围在 0 到 1000 之间的整数
    delayms: "@integer(0, 1000)",
    // bandwidthArg 字段，随机生成一个范围在 0 到 100 的两位小数
    bandwidthArg: "@float(0, 100, 2, 2)Mbit/s",
    bandwidthMax: "@float(0, 100, 2, 2)Mbit/s",
    // state 字段，随机从数组中选取一个值
    "state|1": ["active", "inactive", "pending"],
    // lastBackupTime 字段，随机生成一个时间字符串
    lastBackupTime: "@datetime",
  };
  const data = Mock.mock({
    bandwidth: "@string",
    disks: [sysDisk, dataDisk, dataDisk],
  });
  res.send({
    code: 0,
    data: data,
  });
});

router.post("/haJobDetail", (req, res, next) => {
  const mockData = Mock.mock({
    [`content|${req.query.pageSize}`]: [
      {
        "category|1": ["file", "block", "disk", "partitionTable"],
        "currentSize|1-1000": 1000,
        "direction|1": ["up", "down"],
        dstPaths: "/path/to/destination",
        errorInfo: "@sentence",
        "excludeRulers|1-5": ["@word"],
        lastSyncDate: "@datetime",
        "percent|1-100": 100,
        "speed|1-1000": 1000,
        srcPaths: "/path/to/source",
        "startJob|1": ["0", "1"],
        "state|1": ["RUNNING", "STOPPED", "FINISH", "REALTIME", "IDLE", "ERROR", "DELETE"],
        "totalSize|1-1000": 1000,
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

router.post("/haDiskDetali", (req, res, next) => {
  const mockData = Mock.mock({
    [`content|${req.query.pageSize}`]: [
      {
        homeDiskId: "@guid",
        homeDiskOid: "@guid",
        "id|+1": 1,
        lastOpId: "@guid",
        mountDeskId: "@guid",
        "mountDeskType|1": ["type1", "type2", "type3"],
        shadowDiskId: "@guid",
        shadowDiskOid: "@guid",
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
