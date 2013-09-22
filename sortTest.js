var random = [93, 29, 1, 96, 32, 59, 69, 50, 27, 83, 21, 53, 64, 65, 68, 44, 70, 90, 84, 63, 88, 15, 74, 51, 92, 26, 47, 2, 5, 95, 34, 24, 19, 54, 98, 33, 17, 16, 39, 40, 7, 13, 81, 14, 94, 52, 57, 61, 25, 78, 97, 28, 49, 43, 41, 89, 20, 82, 31, 75, 18, 42, 10, 67, 58, 46, 37, 55, 36, 62, 4, 79, 77, 66, 6, 12, 72, 56, 9, 99, 71, 76, 3, 35, 80, 23, 91, 85, 48, 86, 11, 30, 60, 45, 73, 38, 100, 8, 22, 87];

var test = {
  run: function(userFn) {

    var fail = false;
    var randomCopyUser = [];
    for (var i = 0; i < random.length; i ++ ) {
      randomCopyUser.push(random[i]);
    }

    var randomCopyECMA = [];
    for (var i = 0; i < random.length; i ++ ) {
      randomCopyECMA.push(random[i])
    }

    console.log(" ----------- Start Test ---------- ")

    var userStart = window.performance.now();
    var userSoln = userFn.call(this, randomCopyUser);
    var userStop = window.performance.now();

    var ecmaStart = window.performance.now();
    var ecmaSoln = randomCopyECMA.sort(function(a, b) {return a-b}); 
    var ecmaStop = window.performance.now();

    console.log("%c User Solution time: " + (userStop - userStart) , 'color: #5bc0de');  
    console.log("%c ECMA Solution time: " + (ecmaStop - ecmaStart) ,'color: #428bca');
    
    console.log("%c dt " + ( (userStop - userStart) - (ecmaStop - ecmaStart) ), 'color: #f0ad4e');

    if (ecmaSoln.length !== userSoln.length) {
      fail = true;
      throw "Arrays are different sizes!";
    }  

    for (var i = 0; i < ecmaSoln.length; i++) {
      if (ecmaSoln[i] !== userSoln[i]) {
        fail = true;
        console.log(" %c Mismatch at array index " + i + ". Value was " + userSoln[i] + " but was expected to be " + ecmaSoln[i], 'color: #c7254e');
      }     
    }
    console.log("");
    console.log("");

    if (fail) {
      console.log( "%c Failure! ", 'color: #c7254e')
    } else {
      console.log( "%c Success! ", 'color: #5cb85c');
    }

    console.log(" ----------- End Test ---------- ")
  }
};
