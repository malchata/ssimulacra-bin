const binBuild = require("bin-build");
const log = require("logalot");
const bin = require("./");
const path = require("path");

bin.run().then(() => {
  log.success("ssimulacra pre-build test passed successfully!");
}).catch(error => {
  log.warn(error);
  log.warn("ssimulacra pre-build test failed.");
  log.info("building from source...");

  binBuild.file(path.resolve(__dirname, "..", "src", "ssimulacra.tar.gz"), [
    "make && make install"
  ]).then(() => {
    log.success("ssimulacra built successfully!");
  }).catch(error => {
    log.error(error);
  });
});
