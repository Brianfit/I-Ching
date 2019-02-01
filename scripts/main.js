$('.cast-btn').on('click', function (e) {
  console.log('hi')
  LineCast();
  $('<code>' + asciipic + '</code><br />').prependTo('#Hexagram');

});
window.addEventListener('load', async e => {
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('serviceWorker.js');
      console.log('SW registered');

    } catch (error) {
      console.log('SW failed');

    }
  }
});