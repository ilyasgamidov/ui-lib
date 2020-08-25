import $ from './lib/lib';

$('#first').on('click', function() {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count=second]').on('click', function() {
  $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', function() {
  $('.w-500').fadeToggle(800);
});
