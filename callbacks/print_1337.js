var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};


function print1337(html) {
  var result = html;
  //Change you to j00
  result = you_to_j00(result);
  result = ck_to_x(result);
  result = er_to_0r(result);
  result = changeLetters(result);
  console.log(result);
}

function you_to_j00(input) {
  var result = "";
  var counter = 0;
  while (counter < input.length - 2) {
    var phrase = input[counter] + input[counter+1] + input[counter+2];
    if (phrase === 'you') {
      result += 'j00';
      counter += 3;
    } else {
      result += input[counter];
      counter++;
    }
  }
  return result;
}

function ck_to_x(input) {
  var result = "";
  var counter = 0;
  while (counter < input.length - 1) {
    var phrase = input[counter] + input[counter+1];
    if (phrase === 'ck') {
      result += 'x';
      counter += 2;
    } else {
      result += input[counter];
      counter++;
    }
  }
  return result;
}

function er_to_0r(input) {
  var result = "";
  var counter = 0;
  while (counter < input.length - 1) {
    var phrase = input[counter] + input[counter+1];
    if (phrase === 'er') {
      result += '0r';
      counter += 2;
    } else {
      result += input[counter];
      counter++;
    }
  }
  return result;
}

function changeLetters(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
    var letter = input.charAt(i);
    if (letter === 'a') {
      result += '4';
    } else if (letter === 'e') {
      result += '3';
    } else if (letter === 'l') {
      result += '1';
    } else if (letter === 'o') {
      result += '0';
    } else if (letter === 's') {
      result += '5';
    } else if (letter === 't') {
      result += '7';
    } else {
      result += letter;
    }
  }
  return result;
}

getHTML(requestOptions, print1337);

