(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let natale = "Dec 25, 2020 00:00:00",
        countDown = new Date(natale).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("Giorni").innerText = Math.floor(distance / (day)),
            document.getElementById("Ore").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("Minuti").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("Secondi").innerText = Math.floor((distance % (minute)) / second);
  
          
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "BUON NATALE!";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
}());


      

(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
      window.setTimeout(callback, 1000 / 60);
  };
  window.requestAnimationFrame = requestAnimationFrame;
})();






