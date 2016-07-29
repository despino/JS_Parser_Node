var fs = require('fs');
var contents = fs.readFileSync('test.txt', 'utf8');

function sort(text) {
  text = text.toLowerCase().split(/[\. , \n]+/g);
  text = text.sort();
  var current = null;
  var cnt = 0;
  var masterList = [];
  for (var i = 0; i < text.length; i++) {
      if (text[i] != current) {
          if (cnt > 0) {
            masterList.push({ key: current, val: cnt } );
          }
          current = text[i];
          cnt = 1;
      } else {
          cnt++;
      }
  }
  if (cnt > 0) {
    masterList.push({ key: current, val: cnt } ); //alphabetically sorted
  }
  masterList = masterList.sort(function (a, b) { //then sorted by count
    return - (a.val - b.val);
  });
  console.log( masterList );
}
sort(contents);
