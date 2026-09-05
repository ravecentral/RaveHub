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
  const classicRaveTracks = [
    {
      url: 'https://www.dropbox.com/scl/fi/bo7rysd15wfwzl17nlge8/dj-hype-w-magika-stixman-helter-skelter-sign-of-the-times-o2-birmingham-04.05.97.m4a?rlkey=0dqn0yxejuyakx0gunpzkp6jk&st=hif09v7n&dl=0&raw=1',
      title: 'DJ Hype w/ Magika Stixman · Helter Skelter · Sign of the Times · O2 Birmingham · 04.05.97'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/sp9ahxgu9i45mzlws9mgi/dj-swan-e-with-mc-mc-world-dance-2nd-april-1994.m4a?rlkey=9xv5t6mqg2yofzqpcrmr8kb27&st=l0zddfr6&dl=0&raw=1',
      title: 'DJ Swan-E with MC MC · World Dance 2nd April 1994'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/mwsywmmjpdx3dcjtf98v2/dj-sy-dreamscape-10-get-smashed-8th-april-1994.m4a?rlkey=rvja19e78pwmx850ne3xen1ry&st=ki0d7m8o&dl=0&raw=1',
      title: 'DJ Sy · Dreamscape 10 · Get Smashed · 8th April 1994'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/bhtgvb2xpl97dbor5lj6g/dj-sy-obsession-the-third-dimension-30th-october-1992.m4a?rlkey=4om6fxeq3gjtbm6o8o2uvrkm7&st=aruz14ca&dl=0&raw=1',
      title: 'DJ Sy · Obsession — The Third Dimension · 30th October 1992'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/ix97ari6xdcwze4kjas8e/ratpack-fantazia-one-step-beyond-castle-donnington-25-7-1992.m4a?rlkey=f7zh914g90jj02knsdcw0tmty&st=e3rwlf1i&dl=0&raw=1',
      title: 'Ratpack · Fantazia · One Step Beyond · Castle Donnington · 25.7.1992'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/yktnxk2ficp0n4zjyret9/slipmatt-live-fantazia-littlecote-house-nye-31-12-1992.m4a?rlkey=uy3cgge8alhqbif4zhmnko5g1&st=s1w6d86h&dl=0&raw=1',
      title: 'Slipmatt · Live Fantazia, Littlecote House NYE · 31.12.1992'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/1r87pkiue5mzx0d4qfm21/Vinylgroover-Live-The-Fruit-Club-Brunel-Rooms-Swindon-1996-1st-march.mp3?rlkey=z0hbhonewhynjezljqff9ye7q&st=qfvzol7s&dl=0&raw=1',
      title: 'Vinylgroover · Live The Fruit Club, Brunel Rooms Swindon 1996'
    }
  ];
  const classicRaveStateKey = 'atr-classic-rave-state';
  const classicTrackOrderKey = 'atr-classic-rave-order';
  const pickRandomClassicTrack = () => {
    if (!classicRaveTracks.length) {
      return null;
    }

    return classicRaveTracks[Math.floor(Math.random() * classicRaveTracks.length)];
  };

  const getClassicTrackOrder = () => {
    try {
      const savedOrder = localStorage.getItem(classicTrackOrderKey);
      if (!savedOrder) {
        return null;
      }
      const parsedOrder = JSON.parse(savedOrder);
      return Array.isArray(parsedOrder) && parsedOrder.length === classicRaveTracks.length ? parsedOrder : null;
    } catch (error) {
      return null;
    }
  };

  const saveClassicTrackOrder = (order) => {
    try {
      localStorage.setItem(classicTrackOrderKey, JSON.stringify(order));
    } catch (error) {}
  };

  const clearClassicTrackOrder = () => {
    try {
      localStorage.removeItem(classicTrackOrderKey);
    } catch (error) {}
  };

  const shuffleClassicTrackOrder = () => {
    const order = classicRaveTracks.map((_, index) => index);

    for (let index = order.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [order[index], order[randomIndex]] = [order[randomIndex], order[index]];
    }

    saveClassicTrackOrder(order);
    return order;
  };

  const getNextClassicTrack = () => {
    if (!classicRaveTracks.length) {
      return null;
    }

    let order = getClassicTrackOrder();
    if (!order) {
      order = shuffleClassicTrackOrder();
    }

    const activeTrackIndex = order.shift();
    if (typeof activeTrackIndex !== 'number' || activeTrackIndex < 0 || activeTrackIndex >= classicRaveTracks.length) {
      const freshOrder = shuffleClassicTrackOrder();
      const fallbackIndex = freshOrder.shift();
      if (typeof fallbackIndex !== 'number') {
        return null;
      }
      saveClassicTrackOrder(freshOrder);
      return classicRaveTracks[fallbackIndex];
    }

    saveClassicTrackOrder(order);
    return classicRaveTracks[activeTrackIndex];
  };
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

    const getClassicRaveState = () => {
      try {
        const savedState = localStorage.getItem(classicRaveStateKey);
        return savedState ? JSON.parse(savedState) : null;
      } catch (error) {
        return null;
      }
    };

    const saveClassicRaveState = (state) => {
      try {
        localStorage.setItem(classicRaveStateKey, JSON.stringify(state));
      } catch (error) {}
    };

    const clearClassicRaveState = () => {
      try {
        localStorage.removeItem(classicRaveStateKey);
      } catch (error) {}
    };

    const getMusicPageState = () => {
      try {
        const savedState = sessionStorage.getItem(playerStateKey);
        return savedState ? JSON.parse(savedState) : null;
      } catch (error) {
        return null;
      }
    };

    const clearMusicPageState = () => {
      try {
        sessionStorage.removeItem(playerStateKey);
      } catch (error) {}
    };

    clearMusicPageState();

    const path = window.location.pathname.toLowerCase();
    const isMusicPage = path.endsWith('/music.html') || path.endsWith('/music') || path === '/music/';

    if (isMusicPage) {
      clearClassicRaveState();
      clearClassicTrackOrder();
      audio.src = '';
      button.className = 'fill-ears-btn';
      button.textContent = 'Play New Music';
      button.title = 'Fill my ears with rave';
      button.setAttribute('aria-label', 'Fill my ears with rave');
      title.parentElement.hidden = false;
      button.classList.remove('lucky-dip-btn');
      button.parentElement.querySelector('.lucky-dip-copy')?.remove();
    } else {
      clearMusicPageState();
      if (audio.src) {
        audio.removeAttribute('src');
      }
      button.classList.add('lucky-dip-btn');
      button.innerHTML = '<span class="play-icon" aria-hidden="true">▶</span>';
      button.title = 'Lucky dip!';
      button.setAttribute('aria-label', 'Lucky dip! Press play to listen to some of the best rave sets of all time! Oi Oi!');
      title.parentElement.hidden = true;

      const copy = button.parentElement.querySelector('.lucky-dip-copy');
      if (!copy) {
        const promoCopy = document.createElement('span');
        promoCopy.className = 'lucky-dip-copy';
        promoCopy.textContent = 'Lucky dip! Press play to listen to some of the best rave sets of all time! Oi Oi!';
        button.parentElement.insertBefore(promoCopy, button.nextSibling);
      }

      const buildMobileMiniPlayer = (track, startTime = 0, autoPlay = true) => {
        const existingPlayer = document.querySelector('.classic-rave-mini-player');
        if (existingPlayer) {
          existingPlayer.remove();
        }

        const miniPlayer = document.createElement('div');
        miniPlayer.className = 'classic-rave-mini-player';
        miniPlayer.innerHTML = `
          <style>
            .classic-rave-mini-player {
              position: fixed;
              left: 10px;
              right: 10px;
              bottom: 10px;
              z-index: 2000;
              padding: 10px 10px 8px;
              border-radius: 16px;
              background: linear-gradient(180deg, #171f33 0%, #111827 34%, #090d18 100%);
              border: 1px solid rgba(77, 243, 255, 0.7);
              box-shadow: 0 0 0 1px rgba(77, 243, 255, 0.15), 0 0 18px rgba(77, 243, 255, 0.2), 0 0 24px rgba(255, 79, 216, 0.15);
              font-family: Arial, sans-serif;
              color: #f5f7ff;
            }

            .classic-rave-mini-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 8px;
              margin-bottom: 6px;
            }

            .classic-rave-mini-labels {
              min-width: 0;
            }

            .classic-rave-mini-badge {
              display: block;
              color: #4df3ff;
              font-size: 0.58rem;
              letter-spacing: 0.18em;
              text-transform: uppercase;
            }

            .classic-rave-mini-title {
              display: block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #dbe6ff;
              font-size: 0.68rem;
            }

            .classic-rave-mini-close {
              appearance: none;
              border: 1px solid rgba(77, 243, 255, 0.6);
              background: rgba(77, 243, 255, 0.08);
              color: #effdff;
              border-radius: 50%;
              width: 26px;
              height: 26px;
              font-size: 1.1rem;
              line-height: 1;
              padding: 0;
              flex: 0 0 auto;
            }

            .classic-rave-mini-player audio {
              width: 100%;
              max-height: 40px;
              display: block;
            }
          </style>
          <div class="classic-rave-mini-header">
            <div class="classic-rave-mini-labels">
              <span class="classic-rave-mini-badge">Lucky dip · Now Playing</span>
              <span class="classic-rave-mini-title">${track.title}</span>
            </div>
            <button type="button" class="classic-rave-mini-close" aria-label="Close classic rave player">×</button>
          </div>
          <audio controls playsinline ${autoPlay ? 'autoplay' : ''} src="${track.url}"></audio>
        `;

        const closeButton = miniPlayer.querySelector('.classic-rave-mini-close');
        closeButton.addEventListener('click', () => {
          miniPlayer.remove();
          clearClassicRaveState();
          clearClassicTrackOrder();
        });

        document.body.appendChild(miniPlayer);

        const miniAudio = miniPlayer.querySelector('audio');
        if (miniAudio) {
          const persistState = () => {
            saveClassicRaveState({
              url: track.url,
              title: track.title,
              currentTime: miniAudio.currentTime,
              isPlaying: !miniAudio.paused
            });
          };

          miniAudio.addEventListener('play', persistState);
          miniAudio.addEventListener('pause', persistState);
          miniAudio.addEventListener('timeupdate', persistState);
          miniAudio.addEventListener('ended', () => {
            miniPlayer.remove();
            clearClassicRaveState();
            clearClassicTrackOrder();
          });

          if (startTime > 0) {
            miniAudio.addEventListener('loadedmetadata', () => {
              miniAudio.currentTime = Math.min(startTime, miniAudio.duration || startTime);
            }, { once: true });
          }

          if (autoPlay) {
            miniAudio.play().catch(() => {
              miniAudio.muted = true;
              miniAudio.play().catch(() => {});
            });
          }
        }
      };

      const openClassicRavePopup = (track, startTime = 0, autoPlay = true) => {
        if (isMobileDevice()) {
          buildMobileMiniPlayer(track, startTime, autoPlay);
          return;
        }

        const popup = window.open('', 'classicRavePlayer', 'width=360,height=220,left=24,top=24,resizable=yes,scrollbars=no');

        if (!popup || !popup.document) {
          window.open(track.url, '_blank', 'noopener,noreferrer');
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
                background: radial-gradient(circle at top left, rgba(77, 243, 255, 0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(255, 79, 216, 0.12), transparent 25%), #050814;
              }

              .player-wrap {
                position: relative;
                width: 330px;
                padding: 12px 12px 10px;
                border-radius: 18px;
                border: 1px solid rgba(77, 243, 255, 0.65);
                background: linear-gradient(180deg, #171f33 0%, #111827 34%, #090d18 100%);
                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 -8px 20px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(77, 243, 255, 0.14), 0 0 18px rgba(77, 243, 255, 0.22), 0 0 24px rgba(255, 79, 216, 0.10);
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
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding: 0 8px;
              }

              .now-playing-label {
                margin: 0 0 2px;
                text-align: center;
                color: var(--pink);
                font-size: 0.5rem;
                letter-spacing: 0.24em;
                text-transform: uppercase;
                text-shadow: 0 0 10px rgba(255, 79, 216, 0.7);
              }

              audio {
                width: 100%;
                margin-top: 8px;
              }
            </style>
          </head>
          <body>
            <div class="player-wrap">
              <div class="deck-top">
                <span class="badge">Lucky dip</span>
                <div class="deck-lights"><span></span><span></span></div>
              </div>
              <h1>Classic Rave Set</h1>
              <p class="subtext">${track.title}</p>
              <p class="now-playing-label">Now Playing</p>
              <audio controls autoplay src="${track.url}"></audio>
            </div>
          </body>
          </html>`);
        popup.document.close();

        const popupAudio = popup.document.querySelector('audio');
        if (popupAudio) {
          popupAudio.addEventListener('play', () => {
            saveClassicRaveState({
              url: track.url,
              title: track.title,
              currentTime: popupAudio.currentTime,
              isPlaying: true
            });
          });

          popupAudio.addEventListener('pause', () => {
            saveClassicRaveState({
              url: track.url,
              title: track.title,
              currentTime: popupAudio.currentTime,
              isPlaying: false
            });
          });

          popupAudio.addEventListener('timeupdate', () => {
            saveClassicRaveState({
              url: track.url,
              title: track.title,
              currentTime: popupAudio.currentTime,
              isPlaying: !popupAudio.paused
            });
          });

          popupAudio.addEventListener('ended', () => {
            clearClassicRaveState();
            clearClassicTrackOrder();
          });

          if (startTime > 0) {
            popupAudio.addEventListener('loadedmetadata', () => {
              popupAudio.currentTime = Math.min(startTime, popupAudio.duration || startTime);
            }, { once: true });
          }

          if (autoPlay) {
            popupAudio.play().catch(() => {
              popupAudio.muted = true;
              popupAudio.play().catch(() => {});
            });
          }
        }

        popup.focus();
      };

      const resumeState = getClassicRaveState();
      const musicPageState = getMusicPageState();

      if (musicPageState && musicPageState.isPlaying) {
        clearClassicRaveState();
        clearClassicTrackOrder();
      } else if (resumeState && resumeState.isPlaying) {
        const resumeTrack = classicRaveTracks.find((track) => track.url === resumeState.url);

        if (resumeTrack) {
          openClassicRavePopup(resumeTrack, resumeState.currentTime || 0, true);
        } else {
          clearClassicRaveState();
        }
      }

      document.addEventListener('click', (event) => {
        const clickedButton = event.target && event.target.closest ? event.target.closest('#fill-ears-btn') : null;
        if (!clickedButton || clickedButton !== button) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        const track = getNextClassicTrack();
        if (!track) {
          return;
        }

        clearMusicPageState();
        saveClassicRaveState({
          url: track.url,
          title: track.title,
          currentTime: 0,
          isPlaying: true
        });

        openClassicRavePopup(track, 0, true);
      }, true);

      return;
    }

    button.textContent = 'Play New Music';
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

    const resetToRandomTrackOrder = () => {
      playOrder = shuffleTracks();
      currentOrderIndex = 0;
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
      resetToRandomTrackOrder();
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

      clearClassicRaveState();
      audio.src = track.path;
      saveState();
      audio.addEventListener('loadedmetadata', () => {
        audio.currentTime = Math.min(startTime, audio.duration || startTime);
      }, { once: true });
      audio.play().then(() => setPlayingState(track)).catch(setStoppedState);
    };

    document.addEventListener('click', (event) => {
      const clickedButton = event.target && event.target.closest ? event.target.closest('#fill-ears-btn') : null;
      if (!clickedButton || clickedButton !== button) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (audio.paused) {
        clearClassicRaveState();
        resetToRandomTrackOrder();
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
      resetToRandomTrackOrder();
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
