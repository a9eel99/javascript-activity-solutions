let countdown = 10; 
let timer = setInterval(function() { 
 console.log(countdown); 
 countdown--; 
 if (countdown < 0) clearInterval(timer); 
}, 1000); 
