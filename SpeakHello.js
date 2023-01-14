
(function (window) {


  var helloSpeaker = {};
  helloSpeaker.name = names; 

  var speakWord = "Hello ";

  helloSpeaker.speak = function () {
    console.log(speakWord + " " + helloSpeaker.name);
  }


  window.helloSpeaker = helloSpeaker;

})(window);



//   var greeter = {};
//   greeter.name = names ; 

//   var greeting = "Hello ";
//   greeter.sayHello = function () {
//     console.log(greeting + greeter.name);
//   }

//   window.greeter = greeter;

// })(window);


// var speakWord = "Hello";



// function speak(name) {
//   console.log(speakWord + " " + name);
// }


// xxxx.xxxx = helloSpeaker;
