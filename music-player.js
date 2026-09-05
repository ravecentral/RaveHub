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

      const openClassicRavePopup = (track, startTime = 0, autoPlay = true) => {
        const existingPlayer = document.querySelector('.classic-rave-overlay');
        if (existingPlayer) {
          existingPlayer.remove();
        }

        const overlay = document.createElement('div');
        overlay.className = 'classic-rave-overlay';
        overlay.innerHTML = `
          <style>
            .classic-rave-overlay {
              position: fixed;
              inset: 0;
              display: grid;
              place-items: center;
              background: rgba(5, 8, 20, 0.7);
              z-index: 3000;
              backdrop-filter: blur(4px);
            }

            .classic-rave-panel {
              width: min(360px, calc(100vw - 24px));
              padding: 18px 16px 14px;
              border-radius: 18px;
              border: 1px solid rgba(77, 243, 255, 0.7);
              background: linear-gradient(180deg, #171f33 0%, #111827 34%, #090d18 100%);
              box-shadow: 0 0 0 1px rgba(77, 243, 255, 0.15), 0 0 20px rgba(77, 243, 255, 0.2), 0 0 28px rgba(255, 79, 216, 0.15);
              color: #f5f7ff;
              font-family: Arial, sans-serif;
            }

            .classic-rave-panel-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 8px;
              margin-bottom: 10px;
              font-size: 0.6rem;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              color: #4df3ff;
            }

            .classic-rave-close {
              appearance: none;
              border: 1px solid rgba(77, 243, 255, 0.6);
              background: rgba(77, 243, 255, 0.08);
              color: #effdff;
              width: 28px;
              height: 28px;
              border-radius: 50%;
              font-size: 1.2rem;
              line-height: 1;
              cursor: pointer;
            }

            .classic-rave-panel h3 {
              margin: 0 0 8px;
              text-align: center;
              font-size: 0.76rem;
              letter-spacing: 0.18em;
              text-transform: uppercase;
              color: #4df3ff;
            }

            .classic-rave-track {
              margin: 0 0 12px;
              text-align: center;
              line-height: 1.4;
              color: #dbe6ff;
              font-size: 0.7rem;
              letter-spacing: 0.08em;
            }

            .classic-rave-panel audio {
              display: block;
              width: 100%;
              margin: 0;
            }
          </style>
          <div class="classic-rave-panel" role="dialog" aria-label="Classic rave player">
            <div class="classic-rave-panel-header">
              <span>Lucky dip</span>
              <button type="button" class="classic-rave-close" aria-label="Close classic player">×</button>
            </div>
            <h3>Classic Rave Set</h3>
            <p class="classic-rave-track">${track.title}</p>
            <audio controls ${autoPlay ? 'autoplay' : ''} src="${track.url}"></audio>
          </div>
        `;

        const closeButton = overlay.querySelector('.classic-rave-close');
        closeButton.addEventListener('click', () => {
          overlay.remove();
          clearClassicRaveState();
          clearClassicTrackOrder();
        });

        const audio = overlay.querySelector('audio');
        if (audio) {
          audio.addEventListener('play', () => {
            saveClassicRaveState({
              url: track.url,
              title: track.title,
              currentTime: audio.currentTime,
              isPlaying: true
            });
          });
          audio.addEventListener('pause', () => {
            saveClassicRaveState({
              url: track.url,
              title: track.title,
              currentTime: audio.currentTime,
              isPlaying: false
            });
          });
          audio.addEventListener('timeupdate', () => {
            saveClassicRaveState({
              url: track.url,
              title: track.title,
              currentTime: audio.currentTime,
              isPlaying: !audio.paused
            });
          });
          audio.addEventListener('ended', () => {
            overlay.remove();
            clearClassicRaveState();
            clearClassicTrackOrder();
          });
          if (startTime > 0) {
            audio.addEventListener('loadedmetadata', () => {
              audio.currentTime = Math.min(startTime, audio.duration || startTime);
            }, { once: true });
          }
        }

        document.body.appendChild(overlay);
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
