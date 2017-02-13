$(document).ready(function() {
  var rowLength = 64
  var containersize = 500

// function to write HTML divs for each pixel
  var gridMaker = function(x) {
    var i = 0;
    var cells = x * x;
    while (i < cells){
      $('#container').append("<div class='pixel'></div>");
      i++;
    }

    // set CSS values for pixel height and width using entire #container
    $('.pixel').css({
      "height": containersize / rowLength + "px",
      "width": containersize / rowLength + "px",
    });
  };

  // change pixel colors upon pointer entering
  var paint = function(y) {
    $(y).mouseenter(function() {
      $(this).css("background-color", "#000000");
    });
  };

  // call functions to run
  gridMaker(rowLength);
  paint('.pixel');

  // functon to clear #container
  var clear = function() {
    $('#reset_button').click(function() {
      $('.pixel').remove();
      gridMaker(rowLength);
      paint('.pixel');
    })
  };
  clear();

  // function to change resolution
  var resolution = function() {
    $('#resolution_button').click(function () {
      rowLength = prompt("How many across? (Enter value between 5 and 150)", "75");
      if (rowLength > 150 || rowLength < 5 || isNaN(rowLength) != false) {
        alert("Input out of range. Setting to 75");
        rowLength = 75
      };
      $('.pixel').remove();
      gridMaker(rowLength);
      paint('.pixel');
    })
  };
  resolution();

  // function to change container size
  var size = function() {
    $('#size_button').click(function () {
      $('.pixel').remove();
      containersize = prompt("How large? (100 - 800 pixels)")
      if (containersize > 800 || containersize < 100 || isNaN(containersize) != false) {
        alert("Out of range. Setting to 500");
        containersize = 500
      }
      $('#container').css({
        'height': containersize + "px",
        'width': containersize + "px"
      });
      $('#control_div').css({'width': containersize + 'px'});
      gridMaker(rowLength);
      paint('.pixel');
    })
  }
  size();


}); // end $(document)
