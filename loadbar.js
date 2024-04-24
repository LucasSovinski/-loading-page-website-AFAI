window.onload = function() {
    let elem = document.getElementById("loader");
    let width = 0;
    let increasing = true;
  
    function frame() {
      if (increasing) {
        if (width >= 100) {
          increasing = false;
        } else {
          width++;
        }
      } else {
        if (width <= 0) {
          increasing = true;
        } else {
          width--;
        }
      }
      elem.style.width = width + '%';
      if (width === 25) {
        elem.style.backgroundColor = "#ED1A39";
      }
      if (width === 50) {
        elem.style.backgroundColor = "#3590D1";
      }
      if (width === 75) {
        elem.style.backgroundColor = "#80C341";
      }
      if (width === 90) {
        elem.style.backgroundColor = "#F6E004";
      }
      
    }
  
    setInterval(frame, 45);
  };