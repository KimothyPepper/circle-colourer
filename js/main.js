var $ball = $('.ball');
var $input = $('#word');

$('form').on('change', function () {
  var ballColor = $input.val();

  $ball.css('background-color', ballColor);
});
