const express = require("express");
const router = express.Router();
const Mock = require("mockjs");

router.post("/queryChangeMidDesks", (req, res, next) => {
  const data = Mock.mock({
    [`content|${req.query.pageSize}`]: [
      {
        "btnReStart|0-1": 0,
        "btnRestartSyncServer|0-1": 0,
        "btnResumeSync|0-1": 0,
        "btnStopSync|0-1": 0,
        "cpu|1-8": 4,
        "createdDate|1617648000000-1625097600000": 0,
        creator: "@name",
        deskId: "@guid",
        desktopName: "@word",
        id: "@guid",
        imageName: "@word",
        ip: "@ip",
        manageStatus: "@word",
        "memory|1-32": 8,
        modifiedDate: null,
        modifier: null,
        "mountDeskCount|1-10": 5,
        "mountDiskCount|1-5": 3,
        osName: "@word",
        status: "@word",
        statusName: "@word",
        targetPoolId: "@guid",
        targetPoolName: "@word",
        "volCacheSize|1-1024": 256,
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

module.exports = router;
