const exec = require('child_process').exec;
module.exports = function sysPrefix() {
  return new Promise((resolve, reject) => {
    exec('python -c \'import sys; print(sys.prefix)\'',
      (err, stdout) => {
        if (err !== null) {
          reject(err);
        }
        else {
          resolve(stdout.toString());
        }
      });
  });
}
