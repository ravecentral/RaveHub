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
      path: 'music/DJ Deluxe - Lost In Music EP - 01 Into The Zone - Lazarus Recordings.mp3',
      title: 'DJ Deluxe - Into The Zone (Lazarus Recordings)'
    },
    {
      path: 'music/Fibzy - Doot doot - oosh.bandcamp.com_doot-doot.mp3',
      title: 'Fibzy - Doot Doot (OOSH Records)'
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
    },
    {
      url: 'https://www.dropbox.com/scl/fi/1eogddvlwapxxygisp93w/LTJ_Bukem_MC_Conrad_BBC_Essential_Mix_Live_Cream_25_08_1996_KLICKAUD.mp3?rlkey=l1tucq3277wjys2y587cj6er6&st=nnpzggdn&dl=0&raw=1',
      title: 'LTJ Bukem & MC Conrad · BBC Essential Mix Live @ Cream · 25.08.1996'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/btszf3zyxjafcjgvie8is/Slipmatt_Live_O2_Arena_London_Supporting_The_Prodigy_31_12_2013_KLICKAUD.mp3?rlkey=m2ceeyaowfi51g7x6hlmvaiyg&st=r5jbuqi0&dl=0&raw=1',
      title: 'Slipmatt · Live O2 Arena London, Supporting The Prodigy · 31.12.2013'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/4bo6gk9lpkohpwo1a4m5i/Nicky-Blackmarket-Stevie-Hyper-D-One-Nation-June-1997-1423218611.mp3?rlkey=n7w88r4y0jh39375biuea0zb2&st=0k3jhtsq&dl=0&raw=1',
      title: 'Nicky Blackmarket & Stevie Hyper D · One Nation · June 1997'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/luhj8wwtqt5117jhk2wyf/One-In-The-Jungle-DJ-Zinc-DJ-Hype-and-DJ-Ron-15.11.1996-525572333.mp3?rlkey=q8l9v7weyi70h2gmuzle1ixdh&st=0wqm6qoq&dl=0&raw=1',
      title: 'One In The Jungle · DJ Zinc, DJ Hype & DJ Ron · 15.11.1996'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/jytqw8z4f91x5ik1jpjsk/Chase-Status-_-Boiler-Room_-London-2068175525.mp3?rlkey=qicytz1ni8cl5lyc1i4p7ff0o&st=w6xt8wr0&dl=0&raw=1',
      title: 'Chase & Status · Boiler Room London'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/t010pv3u2mmydsl4kv17o/K-Klass-DJ-Set-CLOSING-MAIN-ROOM-1am-2am-live-UpYerRonson-Day-Night-Terrace-Party-26.5.2018-1586306712.mp3?rlkey=dzmug9k4upzi0ii56fi5ddtji&st=hpv64wk6&dl=0&raw=1',
      title: 'K-Klass · Closing Main Room · UpYerRonson Terrace Party · 26.5.2018'
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
    const siteHeader = document.querySelector('.rave-header') || document.querySelector('body > header, header');
    if (siteHeader && !siteHeader.querySelector('.atr-social')) {
      const socials = [
        {
          side: 'left',
          href: 'https://www.facebook.com/profile.php?id=61594719051396',
          label: 'All Tings Rave',
          platform: 'Facebook',
          icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>'
        },
        {
          side: 'right',
          href: 'https://www.instagram.com/alltingsrave/',
          label: '@alltingsrave',
          platform: 'Instagram',
          icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>'
        }
      ];

      let socialParent = siteHeader;
      if (!siteHeader.classList.contains('rave-header')) {
        socialParent = document.createElement('div');
        socialParent.className = 'atr-social-row';
        siteHeader.appendChild(socialParent);
      }

      socials.forEach((social) => {
        const link = document.createElement('a');
        link.className = `atr-social atr-social--${social.side} atr-social--${social.platform.toLowerCase()}`;
        link.href = social.href;
        link.target = '_blank';
        link.rel = 'noopener';
        link.setAttribute('aria-label', `All Tings Rave on ${social.platform}`);
        link.innerHTML = `<span class="atr-social-icon">${social.icon}</span><span class="atr-social-text"><span class="atr-social-platform">${social.platform}</span><span class="atr-social-handle">${social.label}</span></span>`;
        socialParent.appendChild(link);
      });

      // Small screens have no room beside the logo, so show a full-text row under the nav.
      if (!document.querySelector('.atr-social-mobile')) {
        const mobileRow = document.createElement('div');
        mobileRow.className = 'atr-social-mobile';
        socialParent.querySelectorAll('.atr-social').forEach((link) => {
          mobileRow.appendChild(link.cloneNode(true));
        });
        const navBand = document.querySelector('body > .nav-band');
        const anchor = navBand || (siteHeader.parentElement === document.body ? siteHeader : null);
        if (anchor) {
          anchor.insertAdjacentElement('afterend', mobileRow);
        } else {
          document.body.prepend(mobileRow);
        }
      }
    }

    if (window !== window.top && window.top.document.querySelector('.classic-rave-player-shell')) {
      document.addEventListener('click', (event) => {
        const link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
        if (!link || link.target || link.hasAttribute('download')) {
          return;
        }

        const targetUrl = new URL(link.href, window.location.href);
        if (targetUrl.origin === window.location.origin) {
          window.top.postMessage({
            type: 'atr-player-shell-navigation',
            href: targetUrl.href
          }, window.location.origin);
        }
      }, true);

      return;
    }

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
      if (!button.parentElement.querySelector('.new-music-controls')) {
        const controls = document.createElement('div');
        controls.className = 'new-music-controls';
        controls.innerHTML = `
          <button type="button" class="new-music-control prev" aria-label="Previous track">⏮ Prev</button>
          <button type="button" class="new-music-control stop" aria-label="Stop playback">Stop</button>
          <button type="button" class="new-music-control next" aria-label="Next track">Next ⏭</button>
        `;
        button.parentElement.appendChild(controls);
      }
      if (!button.parentElement.querySelector('.new-music-button-grid')) {
        const buttonGrid = document.createElement('div');
        buttonGrid.className = 'new-music-button-grid';
        button.parentElement.insertBefore(buttonGrid, button);
        buttonGrid.append(button, button.parentElement.querySelector('.new-music-controls'));
      }
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

      let mobilePlayerShell;

      const openMobilePlayerShell = (targetUrl, addToHistory = true) => {
        if (!mobilePlayerShell) {
          mobilePlayerShell = document.createElement('iframe');
          mobilePlayerShell.className = 'classic-rave-player-shell';
          mobilePlayerShell.title = 'All Tings Rave';
          mobilePlayerShell.addEventListener('load', () => {
            const playerContainer = mobilePlayerShell.contentDocument?.getElementById('music-player-container');

            if (playerContainer) {
              playerContainer.hidden = true;
            }
          });
          mobilePlayerShell.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;border:0;background:#050814;z-index:1500;';
          document.body.appendChild(mobilePlayerShell);
        }

        mobilePlayerShell.src = targetUrl.href;

        if (addToHistory) {
          window.history.pushState({}, '', `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`);
        }

        window.scrollTo(0, 0);
      };

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
              position: fixed !important;
              left: 10px;
              right: 10px;
              bottom: 10px;
              z-index: 2000;
              padding: 10px 10px 8px;
              border-radius: 16px;
              background: linear-gradient(180deg, #1d1a2e 0%, #121224 34%, #0a0b16 100%) padding-box, linear-gradient(90deg, #ffe600, #ff8a00, #ff2fb3, #4df3ff, #39ff14) border-box;
              border: 2px solid transparent;
              box-shadow: 0 0 18px rgba(255, 138, 0, 0.35), 0 0 24px rgba(57, 255, 20, 0.15);
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
              color: #ffe94d;
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
              border: 1px solid rgba(255, 170, 70, 0.8);
              background: rgba(255, 138, 0, 0.12);
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

            .classic-rave-mini-controls {
              display: flex;
              justify-content: center;
              gap: 8px;
              margin-top: 8px;
            }

            .classic-rave-mini-player .classic-rave-mini-control,
            .classic-rave-mini-player .classic-rave-mini-control:hover {
              appearance: none;
              flex: 0 1 96px;
              width: auto !important;
              border: 1px solid rgba(120, 255, 90, 0.85) !important;
              background: linear-gradient(135deg, rgba(196, 255, 150, 0.92), rgba(84, 230, 70, 0.85)) !important;
              color: #160a00 !important;
              border-radius: 10px !important;
              padding: 7px 6px !important;
              font-size: 0.58rem !important;
              font-weight: 800;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              box-shadow: 0 0 10px rgba(57, 255, 20, 0.4) !important;
            }

            .classic-rave-mini-player .classic-rave-mini-control.stop,
            .classic-rave-mini-player .classic-rave-mini-control.stop:hover {
              background: linear-gradient(135deg, rgba(255, 205, 130, 0.95), rgba(255, 138, 0, 0.85)) !important;
              border-color: rgba(255, 170, 70, 0.9) !important;
              box-shadow: 0 0 10px rgba(255, 138, 0, 0.45) !important;
            }

            .classic-rave-mini-player .classic-rave-mini-control.next,
            .classic-rave-mini-player .classic-rave-mini-control.next:hover {
              background: linear-gradient(135deg, rgba(255, 248, 170, 0.95), rgba(255, 214, 0, 0.85)) !important;
              border-color: rgba(255, 235, 90, 0.9) !important;
              box-shadow: 0 0 10px rgba(255, 214, 0, 0.45) !important;
            }

            .classic-rave-mini-player .classic-rave-mini-close,
            .classic-rave-mini-player .classic-rave-mini-close:hover {
              width: 26px !important;
              height: 26px !important;
              padding: 0 !important;
              border: 1px solid rgba(255, 170, 70, 0.8) !important;
              border-radius: 50% !important;
              background: rgba(255, 138, 0, 0.18) !important;
              color: #fff3d6 !important;
              font-size: 1.1rem !important;
              box-shadow: 0 0 8px rgba(255, 138, 0, 0.4) !important;
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
          <div class="classic-rave-mini-controls">
            <button type="button" class="classic-rave-mini-control prev" aria-label="Previous track">⏮ Prev</button>
            <button type="button" class="classic-rave-mini-control stop" aria-label="Stop playback">Stop</button>
            <button type="button" class="classic-rave-mini-control next" aria-label="Next track">Next ⏭</button>
          </div>
        `;

        const closeButton = miniPlayer.querySelector('.classic-rave-mini-close');
        closeButton.addEventListener('click', () => {
          miniPlayer.remove();
          mobilePlayerShell?.remove();
          mobilePlayerShell = undefined;
          clearClassicRaveState();
          clearClassicTrackOrder();
        });

        document.body.appendChild(miniPlayer);
        miniPlayer.style.zIndex = '2000';

        const miniAudio = miniPlayer.querySelector('audio');
        const miniTrackTitle = miniPlayer.querySelector('.classic-rave-mini-title');
        const miniPrevButton = miniPlayer.querySelector('.classic-rave-mini-control.prev');
        const miniNextButton = miniPlayer.querySelector('.classic-rave-mini-control.next');
        const miniStopButton = miniPlayer.querySelector('.classic-rave-mini-control.stop');

        // Tracks whether playback should be considered "on" for persistence purposes.
        // Only explicit user actions (Stop button, track ending) or a fresh play call
        // should change this - NOT the implicit 'pause' event browsers fire on media
        // elements while a page is being navigated away from/unloaded.
        let shouldBePlaying = autoPlay;

        const updateMiniTrack = (nextTrack, shouldAutoplay = true) => {
          track = nextTrack;
          shouldBePlaying = shouldAutoplay;
          if (miniTrackTitle) {
            miniTrackTitle.textContent = nextTrack.title;
          }

          if (miniAudio) {
            miniAudio.src = nextTrack.url;
            miniAudio.load();
          }

          if (shouldAutoplay && miniAudio) {
            miniAudio.play().catch(() => {
              miniAudio.muted = true;
              miniAudio.play().catch(() => {});
            });
          }

          saveClassicRaveState({
            url: nextTrack.url,
            title: nextTrack.title,
            currentTime: 0,
            isPlaying: shouldAutoplay
          });
        };

        if (miniPrevButton) {
          miniPrevButton.addEventListener('click', () => {
            const currentIndex = classicRaveTracks.findIndex((item) => item.url === track.url);
            const previousIndex = (currentIndex >= 0 ? currentIndex : 0) - 1;
            const targetIndex = (previousIndex + classicRaveTracks.length) % classicRaveTracks.length;
            updateMiniTrack(classicRaveTracks[targetIndex], true);
          });
        }

        if (miniNextButton) {
          miniNextButton.addEventListener('click', () => {
            const currentIndex = classicRaveTracks.findIndex((item) => item.url === track.url);
            const nextIndex = (currentIndex >= 0 ? currentIndex : 0) + 1;
            updateMiniTrack(classicRaveTracks[nextIndex % classicRaveTracks.length], true);
          });
        }

        if (miniStopButton && miniAudio) {
          miniStopButton.addEventListener('click', () => {
            shouldBePlaying = false;
            miniAudio.pause();
            saveClassicRaveState({
              url: track.url,
              title: track.title,
              currentTime: miniAudio.currentTime,
              isPlaying: false
            });
          });
        }

        if (miniAudio) {
          miniAudio.addEventListener('play', () => {
            shouldBePlaying = true;
            saveClassicRaveState({
              url: track.url,
              title: track.title,
              currentTime: miniAudio.currentTime,
              isPlaying: true
            });
          });

          miniAudio.addEventListener('timeupdate', () => {
            saveClassicRaveState({
              url: track.url,
              title: track.title,
              currentTime: miniAudio.currentTime,
              isPlaying: shouldBePlaying
            });
          });

          miniAudio.addEventListener('ended', () => {
            miniPlayer.remove();
            clearClassicRaveState();
            clearClassicTrackOrder();
          });

          window.addEventListener('pagehide', () => {
            saveClassicRaveState({
              url: track.url,
              title: track.title,
              currentTime: miniAudio.currentTime,
              isPlaying: shouldBePlaying
            });
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
                --line: rgba(255, 138, 0, 0.75);
                --cyan: #ffe94d;
                --pink: #ff8a00;
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
                background: radial-gradient(circle at top left, rgba(255, 214, 0, 0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(57, 255, 20, 0.12), transparent 25%), #050814;
              }

              .player-wrap {
                position: relative;
                width: 330px;
                padding: 12px 12px 10px;
                border-radius: 18px;
                border: 2px solid transparent;
                background: linear-gradient(180deg, #1d1a2e 0%, #121224 34%, #0a0b16 100%) padding-box, linear-gradient(90deg, #ffe600, #ff8a00, #ff2fb3, #4df3ff, #39ff14) border-box;
                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 -8px 20px rgba(0, 0, 0, 0.35), 0 0 18px rgba(255, 138, 0, 0.35), 0 0 26px rgba(57, 255, 20, 0.15);
              }

              .player-wrap::before {
                content: "";
                position: absolute;
                inset: 8px;
                border-radius: 12px;
                border: 1px solid rgba(255, 214, 0, 0.2);
                pointer-events: none;
              }

              .player-wrap::after {
                content: "";
                position: absolute;
                left: 14px;
                right: 14px;
                top: 42px;
                height: 1px;
                background: linear-gradient(90deg, transparent, rgba(255, 230, 0, 0.9), rgba(255, 138, 0, 0.9), rgba(57, 255, 20, 0.9), transparent);
                box-shadow: 0 0 12px rgba(255, 138, 0, 0.4);
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
                text-shadow: 0 0 10px rgba(255, 214, 0, 0.75);
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
                box-shadow: 0 0 10px rgba(255, 214, 0, 0.8);
              }

              .deck-lights span:nth-child(2) {
                background: var(--pink);
                box-shadow: 0 0 10px rgba(255, 138, 0, 0.8);
              }

              h1 {
                margin: 0 0 6px;
                font-size: 0.68rem;
                letter-spacing: 0.22em;
                text-transform: uppercase;
                text-align: center;
                color: var(--cyan);
                text-shadow: 0 0 12px rgba(255, 214, 0, 0.8);
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
                text-shadow: 0 0 10px rgba(255, 138, 0, 0.7);
              }

              .player-controls {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                margin-top: 10px;
              }

              .player-control {
                appearance: none;
                width: 84px;
                border: 1px solid transparent;
                color: #160a00;
                border-radius: 10px;
                padding: 8px 6px;
                font: inherit;
                font-size: 0.56rem;
                font-weight: 800;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                cursor: pointer;
                transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
              }

              .player-control:hover {
                transform: translateY(-1px) scale(1.05);
                filter: brightness(1.1);
              }

              .player-control.prev {
                border-color: rgba(120, 255, 90, 0.85);
                background: linear-gradient(135deg, rgba(196, 255, 150, 0.92), rgba(84, 230, 70, 0.85));
                box-shadow: 0 0 10px rgba(57, 255, 20, 0.4);
              }

              .player-control.stop {
                border-color: rgba(255, 170, 70, 0.9);
                background: linear-gradient(135deg, rgba(255, 205, 130, 0.95), rgba(255, 138, 0, 0.85));
                box-shadow: 0 0 10px rgba(255, 138, 0, 0.45);
              }

              .player-control.next {
                border-color: rgba(255, 235, 90, 0.9);
                background: linear-gradient(135deg, rgba(255, 248, 170, 0.95), rgba(255, 214, 0, 0.85));
                box-shadow: 0 0 10px rgba(255, 214, 0, 0.45);
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
              <div class="player-controls">
                <button type="button" class="player-control prev" aria-label="Previous track">⏮ Prev</button>
                <button type="button" class="player-control stop" aria-label="Stop playback">Stop</button>
                <button type="button" class="player-control next" aria-label="Next track">Next ⏭</button>
              </div>
            </div>
          </body>
          </html>`);
        popup.document.close();

        const popupAudio = popup.document.querySelector('audio');
        const updatePopupTrack = (nextTrack, shouldAutoplay = true) => {
          track = nextTrack;
          const popupTitle = popup.document.querySelector('.subtext');
          if (popupTitle) {
            popupTitle.textContent = nextTrack.title;
          }
          popup.document.title = `${nextTrack.title} · Classic Rave Set`;

          if (popupAudio) {
            popupAudio.src = nextTrack.url;
            popupAudio.load();
          }

          if (shouldAutoplay && popupAudio) {
            popupAudio.play().catch(() => {
              popupAudio.muted = true;
              popupAudio.play().catch(() => {});
            });
          }

          saveClassicRaveState({
            url: nextTrack.url,
            title: nextTrack.title,
            currentTime: 0,
            isPlaying: shouldAutoplay
          });
        };

        const popupPrevButton = popup.document.querySelector('.player-control.prev');
        const popupNextButton = popup.document.querySelector('.player-control.next');
        const popupStopButton = popup.document.querySelector('.player-control.stop');

        const jumpPopupTrack = (direction) => {
          if (!classicRaveTracks.length) {
            return;
          }

          const currentIndex = classicRaveTracks.findIndex((item) => item.url === track.url);
          const safeIndex = currentIndex >= 0 ? currentIndex : 0;
          const nextIndex = (safeIndex + direction + classicRaveTracks.length) % classicRaveTracks.length;
          updatePopupTrack(classicRaveTracks[nextIndex], true);
        };

        if (popupPrevButton) {
          popupPrevButton.addEventListener('click', () => jumpPopupTrack(-1));
        }

        if (popupNextButton) {
          popupNextButton.addEventListener('click', () => jumpPopupTrack(1));
        }

        if (popupStopButton && popupAudio) {
          popupStopButton.addEventListener('click', () => {
            popupAudio.pause();
            saveClassicRaveState({
              url: track.url,
              title: track.title,
              currentTime: popupAudio.currentTime,
              isPlaying: false
            });
          });
        }

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
      } else if (isMobileDevice() && resumeState && resumeState.isPlaying) {
        const resumeTrack = classicRaveTracks.find((track) => track.url === resumeState.url);

        if (resumeTrack) {
          buildMobileMiniPlayer(resumeTrack, resumeState.currentTime || 0, true);
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

      document.addEventListener('click', (event) => {
        if (!isMobileDevice() || !document.querySelector('.classic-rave-mini-player')) {
          return;
        }

        const link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
        if (!link || link.target || link.hasAttribute('download')) {
          return;
        }

        const targetUrl = new URL(link.href, window.location.href);
        const currentUrl = new URL(window.location.href);

        if (
          targetUrl.origin !== currentUrl.origin ||
          (targetUrl.pathname === currentUrl.pathname && targetUrl.search === currentUrl.search && targetUrl.hash)
        ) {
          return;
        }

        event.preventDefault();
        openMobilePlayerShell(targetUrl);
      }, true);

      window.addEventListener('popstate', () => {
        if (mobilePlayerShell) {
          openMobilePlayerShell(new URL(window.location.href), false);
        }
      });

      window.addEventListener('message', (event) => {
        if (
          event.origin === window.location.origin &&
          event.data?.type === 'atr-player-shell-navigation' &&
          mobilePlayerShell
        ) {
          openMobilePlayerShell(new URL(event.data.href), true);
        }
      });

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

    const newMusicControls = button.parentElement.querySelector('.new-music-controls');
    const previousMusicButton = newMusicControls?.querySelector('.new-music-control.prev');
    const stopMusicButton = newMusicControls?.querySelector('.new-music-control.stop');
    const nextMusicButton = newMusicControls?.querySelector('.new-music-control.next');

    const skipToTrack = (direction) => {
      currentOrderIndex = (currentOrderIndex + direction + playOrder.length) % playOrder.length;
      playCurrentTrack();
    };

    previousMusicButton?.addEventListener('click', () => skipToTrack(-1));
    nextMusicButton?.addEventListener('click', () => skipToTrack(1));
    stopMusicButton?.addEventListener('click', () => {
      audio.pause();
      audio.currentTime = 0;
      saveState();
      setStoppedState();
    });

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
