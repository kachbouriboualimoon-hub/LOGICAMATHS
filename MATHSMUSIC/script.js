// script.js - Lecteur avec répétition et shuffle

(function() {
    // ---- Éléments DOM ----
    const audio = document.getElementById('audioPlayer') || (() => {
        const a = document.createElement('audio');
        a.id = 'audioPlayer';
        document.body.appendChild(a);
        return a;
    })();

    const playlistView = document.getElementById('playlistView');
    const playerView = document.getElementById('playerView');
    const playlistList = document.getElementById('playlistList');
    const miniPlayer = document.getElementById('miniPlayer');
    const miniTitle = document.getElementById('miniSongTitle');
    const miniPlayBtn = document.getElementById('miniPlayBtn');

    const coverWrapper = document.getElementById('coverWrapper');
    const coverArt = document.getElementById('coverArt');
    const songTitleEl = document.getElementById('songTitle');
    
    // Contrôles
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const repeatBtn = document.getElementById('repeatBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    
    // Jauge
    const progressTrack = document.getElementById('progressTrack');
    const progressFill = document.getElementById('progressFill');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');

    const appContainer = document.getElementById('appContainer');

    // ---- Vérification ----
    if (typeof window.songList === 'undefined' || window.songList.length === 0) {
        if (playlistList) {
            playlistList.innerHTML = '<div style="color:#ff6b6b; text-align:center; padding:20px;">❌ Aucune piste trouvée.</div>';
        }
        return;
    }

    // Sauvegarde de la liste originale pour restaurer après shuffle
    window.songListOriginal = [...window.songList];

    // ---- État ----
    let currentIndex = 0;
    let isPlayerOpen = false;
    let isRepeat = false;
    let isShuffle = false;

    // ---- Utilitaires ----
    function formatTime(seconds) {
        if (isNaN(seconds) || !isFinite(seconds)) return '00:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    // ---- Fond dynamique ----
    function setBackground(coverUrl) {
        if (!appContainer) return;
        if (coverUrl) {
            appContainer.style.backgroundImage = `url('${coverUrl}')`;
            appContainer.style.backgroundSize = 'cover';
            appContainer.style.backgroundPosition = 'center';
            appContainer.classList.add('has-cover');
        } else {
            appContainer.style.backgroundImage = '';
            appContainer.classList.remove('has-cover');
        }
    }

    // ---- Mise à jour de la cover ----
    function updateCover(song) {
        if (!coverArt) return;
        if (song && song.cover) {
            coverArt.style.backgroundImage = `url('${song.cover}')`;
            coverArt.style.backgroundSize = 'cover';
            coverArt.style.backgroundPosition = 'center';
            coverArt.textContent = '';
        } else {
            coverArt.style.backgroundImage = '';
            coverArt.textContent = '🎵';
        }
    }

    // ---- Ouverture / Fermeture ----
    function openPlayer() {
        if (isPlayerOpen) return;
        isPlayerOpen = true;
        playlistView.classList.add('hidden');
        playerView.classList.add('open');
    }

    function closePlayer() {
        if (!isPlayerOpen) return;
        isPlayerOpen = false;
        playlistView.classList.remove('hidden');
        playerView.classList.remove('open');
    }

    // ---- Swipe (horizontal + vertical) ----
    let touchStartX = 0, touchStartY = 0;
    let isSwiping = false;

    if (coverWrapper) {
        coverWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
            isSwiping = true;
        }, { passive: true });

        coverWrapper.addEventListener('touchmove', (e) => {
            if (!isSwiping) return;
            const deltaX = e.changedTouches[0].screenX - touchStartX;
            const deltaY = e.changedTouches[0].screenY - touchStartY;
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
                e.preventDefault();
            }
        }, { passive: false });

        coverWrapper.addEventListener('touchend', (e) => {
            if (!isSwiping) return;
            isSwiping = false;
            const deltaX = e.changedTouches[0].screenX - touchStartX;
            const deltaY = e.changedTouches[0].screenY - touchStartY;

            if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX < 0) nextSong();
                else prevSong();
            } else if (Math.abs(deltaY) > 50 && Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
                closePlayer();
            }
        }, { passive: true });

        let mouseStartX = 0, mouseStartY = 0, isMouseDown = false;
        coverWrapper.addEventListener('mousedown', (e) => {
            mouseStartX = e.screenX;
            mouseStartY = e.screenY;
            isMouseDown = true;
            e.preventDefault();
        });

        coverWrapper.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            const deltaX = e.screenX - mouseStartX;
            if (Math.abs(deltaX) > 10) e.preventDefault();
        });

        document.addEventListener('mouseup', (e) => {
            if (!isMouseDown) return;
            isMouseDown = false;
            const deltaX = e.screenX - mouseStartX;
            const deltaY = e.screenY - mouseStartY;
            if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX < 0) nextSong();
                else prevSong();
            } else if (Math.abs(deltaY) > 50 && Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
                closePlayer();
            }
        });
    }

    // Swipe vers le haut sur miniPlayer
    if (miniPlayer) {
        miniPlayer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
            isSwiping = true;
        }, { passive: true });

        miniPlayer.addEventListener('touchmove', (e) => {
            if (!isSwiping) return;
            const deltaY = e.changedTouches[0].screenY - touchStartY;
            if (deltaY < -10) e.preventDefault();
        }, { passive: false });

        miniPlayer.addEventListener('touchend', (e) => {
            if (!isSwiping) return;
            isSwiping = false;
            const deltaY = e.changedTouches[0].screenY - touchStartY;
            if (deltaY < -50 && Math.abs(deltaY) > Math.abs(e.changedTouches[0].screenX - touchStartX)) {
                openPlayer();
            }
        }, { passive: true });

        let mMouseStartY = 0, isMMouseDown = false;
        miniPlayer.addEventListener('mousedown', (e) => {
            mMouseStartY = e.screenY;
            isMMouseDown = true;
            e.preventDefault();
        });
        document.addEventListener('mouseup', (e) => {
            if (!isMMouseDown) return;
            isMMouseDown = false;
            const deltaY = e.screenY - mMouseStartY;
            if (deltaY < -50) {
                openPlayer();
            }
        });

        miniPlayer.addEventListener('click', (e) => {
            if (e.target === miniPlayBtn) return;
            openPlayer();
        });
    }

    // ---- Fonctions du lecteur ----
    function updateProgress() {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = percent + '%';
            currentTimeEl.textContent = formatTime(audio.currentTime);
            totalTimeEl.textContent = formatTime(audio.duration);
        }
    }

    function playSong(index) {
        if (index < 0 || index >= window.songList.length) return;
        currentIndex = index;
        const song = window.songList[index];
        audio.src = song.file;
        songTitleEl.textContent = song.title;
        miniTitle.textContent = song.title;

        updateCover(song);
        if (song.cover) setBackground(song.cover);
        else setBackground(null);

        audio.play();
        playBtn.textContent = '⏸️';
        miniPlayBtn.textContent = '⏸️';
        playBtn.classList.remove('pulsing');
        updatePlaylistActive();
        openPlayer();
    }

    function updatePlaylistActive() {
        const items = document.querySelectorAll('.playlist-item');
        items.forEach((el, i) => {
            el.classList.toggle('active', i === currentIndex);
        });
    }

    function loadPlaylist() {
        if (!playlistList) return;
        playlistList.innerHTML = '';
        window.songList.forEach((song, index) => {
            const div = document.createElement('div');
            div.className = 'playlist-item';
            div.innerHTML = `<span class="playlist-num">${String(index+1).padStart(2, '0')}</span><span class="playlist-title">${song.title}</span>`;
            div.addEventListener('click', () => playSong(index));
            playlistList.appendChild(div);
        });

        if (window.songList.length === 0) return;

        // Ne pas réinitialiser la piste en cours si on recharge (ex: après shuffle)
        // mais si currentIndex est hors de la nouvelle liste, on remet à 0
        if (currentIndex >= window.songList.length) {
            currentIndex = 0;
        }

        const currentSong = window.songList[currentIndex];
        if (currentSong) {
            audio.src = currentSong.file;
            songTitleEl.textContent = currentSong.title;
            miniTitle.textContent = currentSong.title;
            updateCover(currentSong);
            if (currentSong.cover) setBackground(currentSong.cover);
            else setBackground(null);
            updatePlaylistActive();
        }

        audio.addEventListener('loadedmetadata', () => {
            totalTimeEl.textContent = formatTime(audio.duration);
        });

        playBtn.classList.add('pulsing');
    }

    // ---- Contrôles ----
    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = '⏸️';
            miniPlayBtn.textContent = '⏸️';
            playBtn.classList.remove('pulsing');
        } else {
            audio.pause();
            playBtn.textContent = '▶️';
            miniPlayBtn.textContent = '▶️';
            playBtn.classList.add('pulsing');
        }
    }

    function prevSong() {
        if (isShuffle) {
            let prevIndex;
            if (window.songList.length <= 1) return;
            do {
                prevIndex = Math.floor(Math.random() * window.songList.length);
            } while (prevIndex === currentIndex);
            playSong(prevIndex);
        } else if (currentIndex > 0) {
            playSong(currentIndex - 1);
        } else if (isRepeat) {
            playSong(window.songList.length - 1);
        }
    }

    function nextSong() {
        if (isShuffle) {
            let nextIndex;
            if (window.songList.length <= 1) return;
            do {
                nextIndex = Math.floor(Math.random() * window.songList.length);
            } while (nextIndex === currentIndex);
            playSong(nextIndex);
        } else if (currentIndex < window.songList.length - 1) {
            playSong(currentIndex + 1);
        } else if (isRepeat) {
            playSong(0);
        }
    }

    function shuffleSongs() {
        // Mélanger la liste
        for (let i = window.songList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [window.songList[i], window.songList[j]] = [window.songList[j], window.songList[i]];
        }
        // Recharger l'affichage
        loadPlaylist();
        // Jouer la première piste
        if (window.songList.length > 0) {
            playSong(0);
        }
        shuffleBtn.classList.add('active');
    }

    // ---- Événements audio ----
    audio.addEventListener('loadedmetadata', () => {
        totalTimeEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', updateProgress);

    audio.addEventListener('ended', () => {
        if (isRepeat && window.songList.length > 1) {
            // Reprendre la même piste
            audio.currentTime = 0;
            audio.play();
        } else {
            nextSong();
        }
    });

    // ---- Clic sur la jauge ----
    progressTrack.addEventListener('click', (e) => {
        const rect = progressTrack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = (clickX / rect.width) * 100;
        if (audio.duration) {
            audio.currentTime = (percent / 100) * audio.duration;
        }
    });

    // ---- Écouteurs des boutons ----
    playBtn.addEventListener('click', togglePlay);
    miniPlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePlay();
    });
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);

    repeatBtn.addEventListener('click', () => {
        isRepeat = !isRepeat;
        repeatBtn.classList.toggle('active', isRepeat);
        // Si on active répétition, on désactive shuffle (incompatible)
        if (isRepeat && isShuffle) {
            isShuffle = false;
            shuffleBtn.classList.remove('active');
            // Restaurer la playlist originale
            window.songList = [...window.songListOriginal];
            loadPlaylist();
            // Remettre sur la piste en cours si elle existe
            const currentTitle = window.songList[currentIndex]?.title;
            const newIndex = window.songList.findIndex(s => s.title === currentTitle);
            if (newIndex >= 0) currentIndex = newIndex;
            else currentIndex = 0;
            playSong(currentIndex);
        }
    });

    shuffleBtn.addEventListener('click', () => {
        isShuffle = !isShuffle;
        if (isShuffle) {
            // Désactiver la répétition
            isRepeat = false;
            repeatBtn.classList.remove('active');
            shuffleSongs();
        } else {
            // Restaurer la playlist originale
            window.songList = [...window.songListOriginal];
            loadPlaylist();
            // Remettre sur la piste en cours si elle existe
            const currentTitle = window.songList[currentIndex]?.title;
            const newIndex = window.songList.findIndex(s => s.title === currentTitle);
            if (newIndex >= 0) currentIndex = newIndex;
            else currentIndex = 0;
            playSong(currentIndex);
            shuffleBtn.classList.remove('active');
        }
    });

    // ---- Initialisation ----
    loadPlaylist();
    playBtn.classList.add('pulsing');
})();