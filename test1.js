const https = require('https');

function getAndPrintHTML () {

    let body = '';

    const requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };

    https.get(requestOptions, (res) => {
        res.setEncoding('utf-8');

        res.on('data', (chunk) =>{
            body += chunk;
        });
       res.on('end', () => {
           console.log(body);
       })
    });
   
  
  };

  getAndPrintHTML();