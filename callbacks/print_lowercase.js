var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


function printLowerCase(html) {
  var result = "";
  for (var i = 0; i < html.length; i++) {
    if (html.charCodeAt(i) >= 65 && html.charCodeAt(i) <= 90) {
      var code = html.charCodeAt(i) + 32;
      result += String.fromCharCode(code);
    } else {
      result += html.charAt(i);
    }
  }
  console.log(result);
}

getHTML(requestOptions, printLowerCase);

