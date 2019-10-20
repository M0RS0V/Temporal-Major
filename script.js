window.addEventListener('DOMContentLoaded', (event) => {
  let myArray = [
    '-',
    '=',
    '+',
    '~',
    '(',
    ')',
    ';',
    ':',
    '<',
    '>',
    'æ',
    '├',
    '@',
    '0',
    'う',
    'ニ',
    '_',
    '*',
    '^',
    '!',
    '#',
    '♀'
  ];
  var i = 0;
  let a = document.getElementsByClassName('scroller');
  let b = document.getElementsByTagName('span');
  var h = window.innerHeight;
  console.log(h);

  function myLoop () {
     setTimeout(function () {
       // Get a random item from myArray
       let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
       // Create aspan element for that item
       let newSpan = document.createElement('span');
       // Make that item text
       let randString = document.createTextNode(randomItem);
       let currentDiv = document.getElementById('result');
       newSpan.appendChild(randString);
       document.body.insertBefore(newSpan, currentDiv);
        i--;
        if (i < 1) {
          var spans = document.getElementsByTagName('span');
          var spanTotal = spans.length

          myLoop();
        }
     }, 1)//speed
  }
  myLoop();
});
