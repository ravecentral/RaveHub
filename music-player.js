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
  const classicRaveSetsUrl = 'https://www.dropbox.com/scl/fi/1r87pkiue5mzx0d4qfm21/Vinylgroover-Live-The-Fruit-Club-Brunel-Rooms-Swindon-1996-1st-march.mp3?rlkey=z0hbhonewhynjezljqff9ye7q&st=as5zct66&dl=1';

  document.addEventListener('DOMContentLoaded', () => {
    const navigation = document.querySelector('.nav-band');
    const standardHeader = document.querySelector('.rave-header');
    const header = standardHeader || navigation?.closest('header');

    if (header) {
      header.classList.add('sticky-site-header');

      if (navigation && navigation.previousElementSibling !== header) {
        header.insertAdjacentElement('afterend', navigation);
      }

      if (!standardHeader && navigation) {
        const setStickyHeaderHeight = () => {
          navigation.style.top = `${header.getBoundingClientRect().height}px`;
        };

        setStickyHeaderHeight();
        window.addEventListener('resize', () => {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(setStickyHeaderHeight);
          });
        });

        header.stickyHeaderResizeObserver = new ResizeObserver(setStickyHeaderHeight);
        header.stickyHeaderResizeObserver.observe(header);
      }
    }

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

    const isMusicPage = window.location.pathname.toLowerCase().endsWith('/music.html');

    if (!isMusicPage) {
      button.textContent = 'Classic Rave Sets';
      button.title = 'Open Classic Rave Set';
      title.parentElement.hidden = true;

      document.addEventListener('click', (event) => {
        if (event.target !== button) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        const popup = window.open('', 'classicRavePlayer', 'width=440,height=220,resizable=yes,scrollbars=no');

        if (!popup) {
          window.open(classicRaveSetsUrl, '_blank', 'noopener,noreferrer');
          return;
        }

        popup.document.title = 'Classic Rave Set';
        popup.document.write(`<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>
              :root {
                --bg: #050814;
                --panel: rgba(10, 16, 36, 0.92);
                --line: rgba(77, 243, 255, 0.5);
                --cyan: #4df3ff;
                --pink: #ff00ff;
                --text: #f5f7ff;
              }

              * { box-sizing: border-box; }

              body {
                margin: 0;
                min-height: 100vh;
                display: grid;
                place-items: center;
                font-family: Arial, sans-serif;
                background:
                  radial-gradient(circle at center, rgba(77, 243, 255, 0.08), transparent 40%),
                  linear-gradient(135deg, #0b1024 0%, #050814 55%, #02030a 100%);
                color: var(--text);
              }

              body::before {
                content: "";
                position: fixed;
                inset: 0;
                background:
                  repeating-linear-gradient(
                    to right,
                    rgba(255, 80, 80, 0.08) 0,
                    rgba(255, 80, 80, 0.08) 2px,
                    transparent 2px,
                    transparent 40px
                  ),
                  repeating-linear-gradient(
                    to bottom,
                    rgba(255, 80, 80, 0.08) 0,
                    rgba(255, 80, 80, 0.08) 2px,
                    transparent 2px,
                    transparent 40px
                  );
                transform: perspective(600px) rotateX(66deg) translateY(120px);
                opacity: 0.25;
                pointer-events: none;
              }

              .player-wrap {
                position: relative;
                z-index: 1;
                width: min(420px, 90vw);
                padding: 22px 18px 18px;
                border-radius: 18px;
                border: 1px solid var(--line);
                background: var(--panel);
                box-shadow: 0 0 18px rgba(77, 243, 255, 0.5), 0 0 28px rgba(255, 0, 255, 0.25);
              }

              .player-wrap::before {
                content: "";
                position: absolute;
                inset: 10px;
                border-radius: 12px;
                border: 1px solid rgba(255, 0, 255, 0.28);
                pointer-events: none;
              }

              h1 {
                margin: 0 0 16px;
                font-size: 1.1rem;
                text-transform: uppercase;
                letter-spacing: 0.18em;
                text-align: center;
                color: var(--cyan);
                text-shadow: 0 0 12px rgba(77, 243, 255, 0.8), 0 0 18px rgba(255, 0, 255, 0.35);
              }

              .subtext {
                margin: 0 0 12px;
                text-align: center;
                color: #c9d1ff;
                font-size: 0.8rem;
                letter-spacing: 0.08em;
                text-transform: uppercase;
              }

              audio {
                width: 100%;
                margin-top: 8px;
                filter: drop-shadow(0 0 10px rgba(77, 243, 255, 0.35));
              }

              audio::-webkit-media-controls-panel {
                background: rgba(18, 22, 44, 0.9);
              }
            </style>
          </head>
          <body>
            <div class="player-wrap">
              <h1>Classic Rave Set</h1>
              <p class="subtext">Vinylgroover · The Fruit Club</p>
              <audio controls autoplay src="${classicRaveSetsUrl}"></audio>
            </div>
          </body>
          </html>`);
        popup.document.close();
        popup.focus();
      }, true);

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
