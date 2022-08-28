const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
        
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

  const copyFile = (fromPath, toPath)=>{
    return new Promise((resolve,reject)=>{
        fs.copyFile(fromPath, toPath, err => {
            if (err) {
              reject(err);
              return;
            }
            resolve({
            ok:true,
            message:'File Copied'
            })
          });
    })
  }

  module.exports={
    writeFile,copyFile
  }