$(document).ready(function(){
  //Click function
  // Add smooth scrolling to all links on click
    $("a.menu").on('click', function(e) {
  // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        e.preventDefault();
  // Store hash
        var hash = this.hash;
  $('a.menu').removeClass('selected');
        $(this).toggleClass('selected');
  // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of   milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
  // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });