(() => {
  const trackPath = 'music/03 Everything Will Be Okay.mp3';
  const trackTitle = '03 Everything Will Be Okay';

  document.addEventListener('DOMContentLoaded', () => {
    let footer = document.querySelector('footer');

    if (!footer) {
      footer = document.createElement('footer');
      document.body.append(footer);
    }

    footer.classList.add('atr-footer');

    if (!footer.querySelector('.atr-footer-logo')) {
      const logo = document.createElement('img');
      logo.className = 'atr-footer-logo';
      logo.src = 'images/index/ATR Footer Logo.png';
      logo.alt = 'All Tings Rave';
      footer.prepend(logo);
    }

    const audio = document.getElementById('rave-audio');
    const button = document.getElementById('fill-ears-btn');
    const title = document.getElementById('track-title');

    if (!audio || !button || !title) {
      return;
    }

    button.textContent = 'Fill My Ears With Rave';

    const setStoppedState = () => {
      button.classList.remove('playing');
      title.textContent = '--';
    };

    const setPlayingState = () => {
      button.classList.add('playing');
      title.textContent = trackTitle;
    };

    document.addEventListener('click', (event) => {
      if (event.target !== button) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (audio.paused) {
        audio.src = trackPath;
        audio.play().then(setPlayingState).catch(setStoppedState);
      } else {
        audio.pause();
        setStoppedState();
      }
    }, true);

    document.addEventListener('ended', (event) => {
      if (event.target !== audio) {
        return;
      }

      event.stopPropagation();
      audio.src = trackPath;
      audio.play().then(setPlayingState).catch(setStoppedState);
    }, true);

    document.addEventListener('error', (event) => {
      if (event.target === audio) {
        event.stopPropagation();
        setStoppedState();
      }
    }, true);
  });
})();
