const Mock = require("mockjs");

// 随机生成一个范围内的时间戳
function generateRandomTimestamp() {
  // 生成当前时间到未来一年范围内的随机时间戳
  const now = new Date().getTime();
  const future = now - 365 * 24 * 60 * 60 * 1000; // 一年的毫秒数
  const randomTimestamp = Mock.Random.integer(now, future);

  return randomTimestamp;
}

module.exports = { generateRandomTimestamp };
