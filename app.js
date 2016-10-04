var index = 1;

$(function () {
  console.log('Up & running!');

    var $red = $('<div class="color-cube" id="red"></div>');
    var $yellow = $('<div class="color-cube" id=yellow"></div>');
    var $green = $('<div class="color-cube" id="green"></div>');
    var $blue = $('<div class="color-cube" id="blue"></div>');

var colors = [$red, $yellow, $green, $blue];
console.log('Colors Array:', colors);

  // var $red = $('.color-button').data();
  // var $yellow = $('.color-button').data();
  // var $green = $('.color-button').data();
  // var $blue = $('.color-button').data();

  console.log('$red:', $red);
  console.log('$yellow:', $yellow);
  console.log('$green:', $green);
  console.log('$blue:', $blue);

  $('.color-button').on('click', function () {
    var colorClick = $('.color-button').children();
    console.log('Color click:', colorClick);
    // if ($r === )
    var colorCount = index++;
    $('.container').append($red);
    $('.color-cube').addClass('red');
    $('#red').text('Total red: ' + colorCount);
    console.log('Click:', index);
  });
  //
  // $('.color-button, #yellow').on('click', function () {
  //   var colorCount = index++;
  //   $('.container').append($yellow);
  //   $('.color-cube').addClass('yellow');
  //   $('#yellow').text('Total yellow: ' + colorCount);
  //   console.log('Click:', index);
  // });
  //
  // $('.color-button, #green').on('click', function () {
  //   var colorCount = index++;
  //   $('.container').append($green);
  //   $('.color-cube').addClass('green');
  //   $('#green').text('Total green: ' + colorCount);
  //   console.log('Click:', index);
  // });
  //
  // $('.color-button, #blue').on('click', function () {
  //   var colorCount = index++;
  //   $('.container').append($blue);
  //   $('.color-cube').addClass('blue');
  //   $('#blue').text('Total blue: ' + colorCount);
  //   console.log('Click:', index);
  // });
});
