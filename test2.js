const https = require('https');

function getAndPrintHTML (options) {
    let body = '';

    https.get(options, (res) => {
        res.setEncoding('utf-8');

        res.on('data', (chunk) => {
            body += chunk;//body = body + chunk
        });
       res.on('end', () => {
           console.log(body);
       })
  
  }
  
//   var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step3.html'
//   };
  