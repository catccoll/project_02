const path = require("path");
const appDir = process.cwd(); //获取启动文件所在的文件夹路经
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);
module.exports = resolveApp;
