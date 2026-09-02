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
  const isMobileDevice = () => /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || window.matchMedia('(max-width: 768px)').matches;

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

        if (isMobileDevice()) {
          const existingInlinePlayer = document.querySelector('.classic-rave-mobile-player');
          if (existingInlinePlayer) {
            existingInlinePlayer.remove();
          }

          const inlinePlayer = document.createElement('div');
          inlinePlayer.className = 'classic-rave-mobile-player';
          inlinePlayer.innerHTML = `
            <style>
              .classic-rave-mobile-player {
                position: fixed;
                left: 12px;
                right: 12px;
                bottom: 12px;
                z-index: 2000;
                padding: 12px 12px 10px;
                border-radius: 18px;
                background: linear-gradient(180deg, #171f33 0%, #111827 34%, #090d18 100%);
                border: 1px solid rgba(77, 243, 255, 0.7);
                box-shadow: 0 0 0 1px rgba(77, 243, 255, 0.15), 0 0 20px rgba(77, 243, 255, 0.2), 0 0 28px rgba(255, 79, 216, 0.15);
              }

              .classic-rave-mobile-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 8px;
                color: #4df3ff;
                font-size: 0.7rem;
                letter-spacing: 0.18em;
                text-transform: uppercase;
              }

              .classic-rave-mobile-close {
                appearance: none;
                border: 1px solid rgba(77, 243, 255, 0.6);
                background: rgba(77, 243, 255, 0.08);
                color: #effdff;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                font-size: 1.1rem;
                line-height: 1;
                padding: 0;
              }

              .classic-rave-mobile-player audio {
                width: 100%;
                max-height: 42px;
                display: block;
              }
            </style>
            <div class="classic-rave-mobile-header">
              <span>Classic Rave Set</span>
              <button class="classic-rave-mobile-close" type="button" aria-label="Close classic rave player">×</button>
            </div>
            <audio controls autoplay playsinline src="${classicRaveSetsUrl}"></audio>
          `;

          const closeButton = inlinePlayer.querySelector('.classic-rave-mobile-close');
          closeButton.addEventListener('click', () => inlinePlayer.remove());

          document.body.appendChild(inlinePlayer);

          const audio = inlinePlayer.querySelector('audio');
          if (audio) {
            audio.play().catch(() => {
              audio.muted = true;
              audio.play().catch(() => {});
            });
          }

          return;
        }

        const popup = window.open('', 'classicRavePlayer', 'width=360,height=200,left=24,top=24,resizable=yes,scrollbars=no');

        if (!popup) {
          window.open(classicRaveSetsUrl, '_blank', 'noopener,noreferrer');
          return;
        }

        if (popup.closed) {
          window.open('', 'classicRavePlayer', 'width=360,height=200,left=24,top=24,resizable=yes,scrollbars=no');
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
                --panel: rgba(12, 18, 36, 0.96);
                --panel-2: rgba(20, 28, 52, 0.96);
                --line: rgba(77, 243, 255, 0.65);
                --cyan: #4df3ff;
                --pink: #ff4fd8;
                --text: #f5f7ff;
              }

              * { box-sizing: border-box; }

              html, body {
                margin: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #090d1c 0%, #03060e 100%);
                color: var(--text);
              }

              body {
                display: grid;
                place-items: center;
                position: relative;
                background:
                  radial-gradient(circle at top left, rgba(77, 243, 255, 0.18), transparent 30%),
                  radial-gradient(circle at bottom right, rgba(255, 79, 216, 0.12), transparent 25%),
                  #050814;
              }

              .player-wrap {
                position: relative;
                width: 330px;
                padding: 12px 12px 10px;
                border-radius: 18px;
                border: 1px solid rgba(77, 243, 255, 0.65);
                background: linear-gradient(180deg, #171f33 0%, #111827 34%, #090d18 100%);
                box-shadow:
                  inset 0 1px 0 rgba(255, 255, 255, 0.12),
                  inset 0 -8px 20px rgba(0, 0, 0, 0.35),
                  0 0 0 1px rgba(77, 243, 255, 0.14),
                  0 0 18px rgba(77, 243, 255, 0.22),
                  0 0 24px rgba(255, 79, 216, 0.10);
              }

              .player-wrap::before {
                content: "";
                position: absolute;
                inset: 8px;
                border-radius: 12px;
                border: 1px solid rgba(255, 79, 216, 0.22);
                pointer-events: none;
              }

              .player-wrap::after {
                content: "";
                position: absolute;
                left: 14px;
                right: 14px;
                top: 42px;
                height: 1px;
                background: linear-gradient(90deg, transparent, rgba(77, 243, 255, 0.9), rgba(255, 79, 216, 0.9), transparent);
                box-shadow: 0 0 12px rgba(77, 243, 255, 0.4);
              }

              .deck-top {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 6px;
                padding: 0 2px;
              }

              .badge {
                font-size: 0.58rem;
                letter-spacing: 0.18em;
                color: var(--cyan);
                text-transform: uppercase;
                text-shadow: 0 0 10px rgba(77, 243, 255, 0.75);
              }

              .deck-lights {
                display: flex;
                gap: 6px;
                align-items: center;
              }

              .deck-lights span {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                display: block;
                background: var(--cyan);
                box-shadow: 0 0 10px rgba(77, 243, 255, 0.8);
              }

              .deck-lights span:nth-child(2) {
                background: var(--pink);
                box-shadow: 0 0 10px rgba(255, 79, 216, 0.8);
              }

              h1 {
                margin: 0 0 6px;
                font-size: 0.68rem;
                letter-spacing: 0.22em;
                text-transform: uppercase;
                text-align: center;
                color: var(--cyan);
                text-shadow: 0 0 12px rgba(77, 243, 255, 0.8);
              }

              .subtext {
                margin: 0 0 8px;
                text-align: center;
                color: #dbe6ff;
                font-size: 0.54rem;
                letter-spacing: 0.12em;
                text-transform: uppercase;
              }

              .vinyl {
                width: 78px;
                height: 78px;
                border-radius: 50%;
                margin: 8px auto 10px;
                background:
                  radial-gradient(circle at center, #0f1629 0 18%, #050814 19% 28%, #0a0f1d 29% 38%, #060a12 39% 100%);
                border: 2px solid rgba(77, 243, 255, 0.38);
                box-shadow: inset 0 0 0 6px rgba(255, 255, 255, 0.04), 0 0 18px rgba(77, 243, 255, 0.22);
              }

              .mixer-strip {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin: 2px 0 10px;
                padding: 0 16px;
              }

              .knob {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: radial-gradient(circle at 35% 35%, #f4fbff 0%, #98a7d7 18%, #2e355f 58%, #0d1123 100%);
                border: 1px solid rgba(77, 243, 255, 0.5);
                box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.08), 0 0 10px rgba(77, 243, 255, 0.22);
              }

              .level-bar {
                position: relative;
                height: 8px;
                margin: 0 18px 10px;
                border-radius: 10px;
                background: linear-gradient(90deg, rgba(77, 243, 255, 0.15), rgba(255, 79, 216, 0.10));
                border: 1px solid rgba(77, 243, 255, 0.18);
                overflow: hidden;
              }

              .level-bar::before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 60%;
                border-radius: 10px;
                background: linear-gradient(90deg, rgba(77, 243, 255, 0.9), rgba(255, 79, 216, 0.9));
                box-shadow: 0 0 12px rgba(77, 243, 255, 0.45);
              }

              audio {
                width: 100%;
                height: 34px;
                margin-top: 2px;
                filter: drop-shadow(0 0 9px rgba(77, 243, 255, 0.25));
              }

              audio::-webkit-media-controls-panel {
                background: rgba(18, 24, 42, 0.94);
              }
            </style>
          </head>
          <body>
            <div class="player-wrap">
              <div class="deck-top">
                <span class="badge">Deck 1</span>
                <div class="deck-lights"><span></span><span></span></div>
              </div>
              <h1>Classic Rave Set</h1>
              <p class="subtext">Vinylgroover · The Fruit Club</p>
              <div class="vinyl" aria-hidden="true"></div>
              <div class="mixer-strip" aria-hidden="true">
                <span class="knob"></span>
                <span class="knob"></span>
                <span class="knob"></span>
              </div>
              <div class="level-bar" aria-hidden="true"></div>
              <audio id="classicRaveAudio" controls playsinline src="${classicRaveSetsUrl}"></audio>
            </div>
          </body>
          </html>`);
        popup.resizeTo(360, 200);
        popup.moveTo(24, 24);
        popup.document.close();

        setTimeout(() => {
          const popupAudio = popup.document.getElementById('classicRaveAudio');
          if (popupAudio) {
            popupAudio.play().catch(() => {
              popupAudio.muted = true;
              popupAudio.play().catch(() => {});
            });
          }
        }, 250);

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
