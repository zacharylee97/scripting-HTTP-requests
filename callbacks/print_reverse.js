var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


function printReverse(html) {
  var result = "";
  var end = html.length - 1;
  for (var i = end; i >= 0; i--) {
    result += html.charAt(i);
  }
  console.log(result);
}

getHTML(requestOptions, printReverse);

