const express = require("express");
const router = express.Router();
const Mock = require("mockjs");

const { generateRandomTimestamp } = require("../tools");

// 查询策略列表
router.get("/list", (req, res, next) => {
  // 使用 Mock.js 随机生成数据
  const data = Mock.mock({
    endRow: "@integer(1, 100)",
    firstPage: 1,
    hasNextPage: "@boolean",
    hasPreviousPage: "@boolean",
    isFirstPage: true,
    isLastPage: "@boolean",
    lastPage: "@integer(1, 10)",
    [`list|${req.query.pageSize}`]: [
      {
        allocDeskNum: "@integer(10, 50)",
        "appNameList|0-3": ["@word"],
        id: "@increment",
        name: "@title(5, 10)",
        updateDate: '@datetime("T")',
        updateStaffName: "@name",
      },
    ],
    navigateFirstPage: 1,
    navigateLastPage: "@integer(1, 10)",
    navigatepageNums: "@range(1, 10, 1)",
    navigatePages: "@integer(5, 10)",
    nextPage: "@integer(2, 10)",
    pageNum: 1,
    pages: "@integer(1, 10)",
    pageSize: 10,
    prePage: 0,
    size: 10,
    startRow: 1,
    total: 999,
  });

  res.send({
    code: 0,
    data: data,
  });
  next();
});

// 查询策略详情
router.get("/detail", (req, res, next) => {
  const data = Mock.mock({
    "appList|2-5": [
      {
        appName: "@title(3, 5)",
        code: "@guid",
        onShelveStatus: "@integer(0, 1)",
        "processNameList|1-3": ["@word"],
        sysType: "@integer(1, 3)",
      },
    ],
    id: "@guid",
    name: "@title(5, 10)",
    remark: "@sentence",
  });
  res.send({
    code: 0,
    data: data,
  });
  next();
});

// interface submitPolicyBody {
//   assign: 3 | 9;
//   departments: string[];
//   desktops: string[];
// }

router.post("/alloc", (req, res, next) => {
  console.log(req.body);
  // const body: submitPolicyBody = req.body;
  res.send({
    code: 0,
  });
  next();
});

router.get("/app/list", (req, res, next) => {
  const data = Mock.mock({
    endRow: 10,
    firstPage: 1,
    hasNextPage: true,
    hasPreviousPage: false,
    isFirstPage: true,
    isLastPage: false,
    lastPage: 5,
    [`list|${req.query.pageSize}`]: [
      {
        appName: "@ctitle(3, 5)",
        code: '@string("lower", 5)',
        "onShelveStatus|0-1": 1,
        "processNameList|1-3": ["@word"],
        "sysType|1-3": 1,
      },
    ],
    navigateFirstPage: 1,
    navigateLastPage: 5,
    "navigatepageNums|5-10": [1, 2, 3, 4, 5],
    navigatePages: 8,
    nextPage: 2,
    pageNum: 1,
    pages: 5,
    pageSize: 10,
    prePage: 0,
    size: 10,
    startRow: 1,
    total: 999,
  });

  setTimeout(() => {
    res.send({
      code: 0,
      data: data,
    });
  }, 1000);
});

router.get("/getFileTypeOptions", (req, res, next) => {
  const data = Mock.mock({
    list: [
      { label: "PDF文档", value: "pdf" },
      { label: "图片文件", value: "img" },
      { label: "Word文档（docx）", value: "docx" },
      { label: "Excel表格", value: "excel" },
      { label: "文本文件", value: "txt" },
    ],
  });
  setTimeout(() => {
    res.send({
      code: 0,
      data: data,
    });
  }, 1000);
});

router.post("/create", (req, res, next) => {
  // 有几率 返回其他状态码
  const data = {
    user: "tobi",
  };

  setTimeout(() => {
    res.send({
      code: 0,
      data: data,
      msg: "异常信息",
    });
  }, 1000);
});

router.post("/update", (req, res, next) => {
  // 有几率 返回其他状态码
  const data = {
    user: "tobi",
  };

  setTimeout(() => {
    res.send({
      code: 0,
      data: data,
      msg: "异常信息",
    });
  }, 1000);
});

router.get("/getFileList", (req, res, next) => {
  const data = Mock.mock({
    [`list|${req.query.pageSize}`]: [
      {
        fileId: "@id",
        fileName: "@word",
        fileExtension: "@word",
        updatedBy: "@cname",
        updatedTime: generateRandomTimestamp(),
      },
    ],
    total: 999,
  });

  setTimeout(() => {
    res.send({
      code: 0,
      data: data,
    });
  }, 1000);
});

router.get("/getLogList", (req, res, next) => {
  const columns = [
    { prop: "operator", label: "操作人" },
    { prop: "department", label: "所属部门" },
    { prop: "operationType", label: "操作类型" },
    { prop: "ip", label: "IP" },
    { prop: "operationTime", label: "操作时间" },
  ];

  const data = Mock.mock({
    [`list|${req.query.pageSize}`]: [
      {
        [columns[0].prop]: "@cname",
        [columns[1].prop]: "@ctitle(2, 4)",
        [columns[2].prop]: "@pick(['新增', '修改', '删除'])",
        [columns[3].prop]: "@ip",
        [columns[4].prop]: generateRandomTimestamp(),
      },
    ],
    total: 999,
  });

  setTimeout(() => {
    res.send({
      code: 0,
      data: data,
    });
  }, 1000);
});

router.post("/addFile", (req, res, next) => {
  setTimeout(() => {
    res.send({
      code: 0,
      data: true,
    });
  }, 1000);
});

router.post("/removeFile", (req, res, next) => {
  setTimeout(() => {
    res.send({
      code: 0,
      data: true,
    });
  }, 1000);
});

router.post("/saveSettings", (req, res, next) => {
  setTimeout(() => {
    res.send({
      code: 0,
      data: true,
    });
  }, 1000);
});

router.get("/app/categoryTree", (req, res, next) => {
  const data = Mock.mock([
    {
      categoryName: "电子产品",
      "children|2-4": [
        {
          categoryName: "@ctitle(3, 5)",
          "children|0-2": [
            {
              categoryName: "@ctitle(3, 5)",
              children: null,
            },
          ],
        },
      ],
    },
    {
      categoryName: "服装",
      "children|2-4": [
        {
          categoryName: "@ctitle(3, 5)",
          "children|0-2": [
            {
              categoryName: "@ctitle(3, 5)",
              children: null,
            },
          ],
        },
      ],
    },
  ]);
  setTimeout(() => {
    res.send({
      code: 0,
      data: data,
      msg: "",
    });
  }, 1000);
});

router.get("/alloc/desktopList", (req, res, next) => {
  const data = Mock.mock({
    endRow: "@integer(1, 100)",
    firstPage: 1,
    hasNextPage: "@boolean",
    hasPreviousPage: "@boolean",
    isFirstPage: true,
    isLastPage: "@boolean",
    lastPage: "@integer(1, 10)",
    [`list|${req.query.pageSize}`]: [
      {
        allocFlag: "@integer(0, 1)",
        desktopId: "@guid",
        desktopName: "@ctitle(5, 10)",
        "nickName|1": ["@cname"],
        orgId: "@guid",
        orgName: "@ctitle(5, 10)",
        userId: "@guid",
        userName: "@cname",
      },
    ],
    navigateFirstPage: 1,
    navigateLastPage: "@integer(1, 10)",
    "navigatepageNums|5-10": ["@integer(1, 10)"],
    navigatePages: "@integer(1, 10)",
    nextPage: "@integer(2, 10)",
    pageNum: "@integer(1, 10)",
    pages: "@integer(1, 10)",
    pageSize: 10,
    prePage: 0,
    size: 10,
    startRow: 1,
    total: "@integer(50, 200)",
  });
  setTimeout(() => {
    res.send({
      code: 0,
      data: data,
      msg: "11",
    });
  }, 1000);
});

router.get("/alloc/orgTree", (req, res, next) => {
  const data = Mock.mock({
    code: 0,
    "data|2-5": [
      {
        allocFlag: "@integer(0, 1)",
        "children|0-3": [
          {
            allocFlag: "@integer(0, 1)",
            children: null,
            orgId: "@integer(1, 100)",
            orgName: "@ctitle(3, 5)",
          },
        ],
        orgId: "@integer(1, 100)",
        orgName: "@ctitle(3, 5)",
      },
    ],
    msg: "@cparagraph",
  });
  setTimeout(() => {
    res.send(data);
  }, 1000);
  // next();
});

module.exports = router;
