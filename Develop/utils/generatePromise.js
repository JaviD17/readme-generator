const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created successfully. Check out README.md in the utils folder'
            });
        });
    });
};

module.exports = {
    writeFile: writeFile
};