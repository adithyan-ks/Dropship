const { Button } = require("bootstrap");

$(function() {
    var image1_bg_color = '#317a5c';
    var image2_bg_color = '#dedede';
    var image3_bg_color = '#ff0000';
    var image4_bg_color = '#000000';
  
  // pseudo-code...
  
  // When #image2 becomes visible fade .container bg color from image1_bg_color to image2_bg_color
  
  // When #image3 becomes visible fade .container bg color from image2_bg_color to image3_bg_color
  
  // When #image4 becomes visible fade .container bg color from image3_bg_color to image4_bg_color
  
  // When #image1 re-enters view fade .container bg color from image4_bg_color to image1_bg_color
  
  // etc.
  });


  // alert

  function showAlert() {
    alert('its 100% Free!');
  }

  // 

  function changeClass(elementId) {
    var element = document.getElementById(elementId);
    element.classList.toggle('new-style');
  }

  // 

  var count = 0;
  function incrementCounter() {
    count++;
    document.getElementById('counter').textContent = count;
  }
  
