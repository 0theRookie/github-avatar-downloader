const https = require('https');  

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

  function printHTML (html) {
    console.log(html);
  };

function getHTML (options, cb) {
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
getHTML(requestOptions, printHTML);