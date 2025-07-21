export default {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};

// สำหรับคนที่ใช้คำสั่ง npm test ... แล้ว module error
// 1. ให้ลองเปลี่ยนชื่อไฟล์ "babel.config.js" เป็น "babel.config.cjs"
// 2. ให้ลองใช้ code block ด้านล่างนี้แทน

// module.exports = {
//   presets: [
//     ["@babel/preset-env", { targets: { node: "current" } }],
//     "@babel/preset-typescript",
//   ],
// };
