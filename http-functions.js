module.exports = function getHTML(options, cb){
    const https = require('https');

    let body = '';

    https.get(options, (res) => {
        res.setEncoding('utf-8');

        res.on('data', (chunk) => {
            body += chunk;
        });
       res.on('end', () => {
           cb(body);
       });
  });
};



