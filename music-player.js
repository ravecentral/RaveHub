(() => {
  const tracks = [
    {
      path: 'music/03 Everything Will Be Okay.mp3',
      title: '03 Everything Will Be Okay'
    },
    {
      path: 'music/4am Kru - Hurt Me No More (Extended Mix).mp3',
      title: '4am Kru - Hurt Me No More (Extended Mix)'
    },
    {
      path: 'music/Zero B - Lock Up (2019 Remaster).wav',
      title: 'Zero B - Lock Up (2019 Remaster)'
    }
  ];
  const playerStateKey = 'atr-player-state';

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
    let playOrder = [];
    let currentOrderIndex = 0;

    const shuffleTracks = () => {
      const order = tracks.map((_, index) => index);

      for (let index = order.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [order[index], order[randomIndex]] = [order[randomIndex], order[index]];
      }

      return order;
    };

    const getSavedState = () => {
      const savedState = sessionStorage.getItem(playerStateKey);
      return savedState ? JSON.parse(savedState) : null;
    };

    const saveState = () => {
      const trackIndex = playOrder[currentOrderIndex];

      sessionStorage.setItem(playerStateKey, JSON.stringify({
        currentOrderIndex,
        playOrder,
        trackIndex,
        currentTime: audio.currentTime,
        isPlaying: !audio.paused
      }));
    };

    const savedState = getSavedState();

    if (
      savedState &&
      Array.isArray(savedState.playOrder) &&
      savedState.playOrder.length === tracks.length &&
      savedState.playOrder.every((index) => Number.isInteger(index) && index >= 0 && index < tracks.length) &&
      Number.isInteger(savedState.currentOrderIndex) &&
      savedState.currentOrderIndex >= 0 &&
      savedState.currentOrderIndex < savedState.playOrder.length
    ) {
      playOrder = savedState.playOrder;
      currentOrderIndex = savedState.currentOrderIndex;
    } else {
      playOrder = shuffleTracks();
    }

    const setStoppedState = () => {
      button.classList.remove('playing');
      title.textContent = '--';
    };

    const setPlayingState = (track) => {
      button.classList.add('playing');
      title.textContent = track.title;
    };

    const playCurrentTrack = (startTime = 0) => {
      const track = tracks[playOrder[currentOrderIndex]];

      audio.src = track.path;
      audio.addEventListener('loadedmetadata', () => {
        audio.currentTime = Math.min(startTime, audio.duration || startTime);
      }, { once: true });
      audio.play().then(() => setPlayingState(track)).catch(setStoppedState);
    };

    document.addEventListener('click', (event) => {
      if (event.target !== button) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (audio.paused) {
        playCurrentTrack();
      } else {
        audio.pause();
        setStoppedState();
      }
    }, true);

    audio.addEventListener('play', saveState);
    audio.addEventListener('pause', saveState);
    audio.addEventListener('timeupdate', saveState);

    document.addEventListener('ended', (event) => {
      if (event.target !== audio) {
        return;
      }

      event.stopPropagation();
      currentOrderIndex += 1;

      if (currentOrderIndex >= playOrder.length) {
        playOrder = shuffleTracks();
        currentOrderIndex = 0;
      }

      playCurrentTrack();
    }, true);

    document.addEventListener('error', (event) => {
      if (event.target === audio) {
        event.stopPropagation();
        setStoppedState();
      }
    }, true);

    window.addEventListener('pagehide', saveState);

    if (savedState && savedState.isPlaying) {
      playCurrentTrack(Number.isFinite(savedState.currentTime) ? savedState.currentTime : 0);
    }
  });
})();
