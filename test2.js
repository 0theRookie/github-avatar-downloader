const https = require('https');  

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function getAndPrintHTML (options) {
    let body = '';

    https.get(options, (res) => {
        res.setEncoding('utf-8');

        res.on('data', (chunk) => {
            body += chunk;
        });
       res.on('end', () => {
           console.log(body);
       });
  
  });

};
getAndPrintHTML(requestOptions);
  