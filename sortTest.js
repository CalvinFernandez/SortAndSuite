var random = [93, 29, 1, 96, 32, 59, 69, 50, 27, 83, 21, 53, 64, 65, 68, 44, 70, 90, 84, 63, 88, 15, 74, 51, 92, 26, 47, 2, 5, 95, 34, 24, 19, 54, 98, 33, 17, 16, 39, 40, 7, 13, 81, 14, 94, 52, 57, 61, 25, 78, 97, 28, 49, 43, 41, 89, 20, 82, 31, 75, 18, 42, 10, 67, 58, 46, 37, 55, 36, 62, 4, 79, 77, 66, 6, 12, 72, 56, 9, 99, 71, 76, 3, 35, 80, 23, 91, 85, 48, 86, 11, 30, 60, 45, 73, 38, 100, 8, 22, 87];

var test = {
  run: function(answerFn) {
    var userStart = new Date;
    var answer = answerFn.call(this, random);
    var userStop = new Date;

    var solnStart = new Date;
    var solution = random.sort(function(a, b) {return a-b}); 
    var solnStop = new Date;
    
    console.log("User solution completed in " + userStop - userStart + " milliseconds"); 
    console.log("ECMA Javascript .sort() completed in " + solnStop - solnStart + " milliseconds");
    console.log("dt " + (userStop - userStart) - (solnStop - solnStart) + " milliseconds"); 
    
    if (answer.length !== soluntion.length) {
      throw "Arrays are different sizes!";
    }  

    for (var i = 0; i < answer.length; i++) {
      if (solution[i] !== answer[i]) {
        throw "Mismatch at array index " + i + ". Value was " + answer[i] + " but was expected to be " + solution[i];
      }     
    }
  }
};

