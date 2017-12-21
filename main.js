(function () {

  var bv = new Bideo();
  bv.init({

    videoEl: document.querySelector('#background_video'),

    container: document.querySelector('body'),

    resize: true,

    autoplay: true,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    src: [
      {
        src: 'https://ahmednitul.github.io/bideo.js/night.mp4',
        type: 'video/mp4'
      },
    ],

    onLoad: function () {
      document.querySelector('#main_content').style.visibility = 'hidden';
    }
  });
}());
