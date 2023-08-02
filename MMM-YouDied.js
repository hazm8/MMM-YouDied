
// MMM-YouDied.js:

var youDied = document.createElement("img");
youDied.src = './modules/MMM-YouDied/youdied.png';

Module.register("MMM-YouDied", {

    

    //default module config
    defaults: {


    }

    
   // Override dom generator.
  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = youDied;
    return wrapper;

    }

});
