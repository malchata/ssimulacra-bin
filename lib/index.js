const path = require("path");
const BinWrapper = require("bin-wrapper");
const url = "https://raw.githubusercontent.com/malchata/ssimulacra-bin/master/vendor/";

module.exports = new BinWrapper()
  .src(`${url}osx/ssimulacra`, "darwin")
  .src(`${url}linux/x86/ssimulacra`, "linux", "x86")
  .src(`${url}linux/x64/ssimulacra`, "linux", "x64")
  .src(`${url}win/x86/ssimulacra.exe`, "win32", "x86")
  .src(`${url}win/x64/ssimulacra.exe`, "win32", "x64")
  .dest(path.join(__dirname, "../vendor"))
  .use(process.platform === "win32" ? "ssimulacra.exe" : "ssimulacra");
