document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.logo_img');
    let angle = 0;
    let direction = 1;
    
    function shakeLogo() {
      angle += direction * 1;
      logo.style.transform = `rotate(${angle}deg)`;
      
      if (angle > 5 || angle < -5) {
        direction *= -1;
      }
      
      requestAnimationFrame(shakeLogo); // Continuously call the function
    }
  
    shakeLogo();
  });
  