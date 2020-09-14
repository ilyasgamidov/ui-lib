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

$('#trigger').click(() => $('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  },
  btns: {
    count: 3,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr10'],
        true
      ],
      [
        'Save changes',
        ['btn-succsess'],
        false,
        () => {
          alert('data saved');
        }
      ],
      [
        'another btn',
        ['btn-warning', 'ml10'],
        false,
        () => {
          alert('yes');
        }
      ]

    ]
  }
}));