document.addEventListener("DOMContentLoaded", function () {
    const clock = document.getElementById('clock');
    const temperatureDisplay = document.getElementById('temperature');
    const powerButton = document.getElementById('power-button');
    const fridgeBtn = document.getElementById('fridge-view-btn');
    const tvBtn = document.getElementById('tv-btn');
    const browserBtn = document.getElementById('browser-btn');
    const musicPlayerBtn = document.getElementById('music-player-btn');
    const addItemBtn = document.getElementById('add-item-btn');
    const startTimerBtn = document.getElementById('start-timer-btn');

    const fridgeDisplay = document.getElementById('fridge-view-display');
    const tvDisplay = document.getElementById('tv-display');
    const browserDisplay = document.getElementById('browser-display');
    const itemsList = document.getElementById('items-list');
    const newItemInput = document.getElementById('new-item');
    const timerDisplay = document.getElementById('timer-display');
    const timerInput = document.getElementById('timer-input');
    const audioPlayer = document.getElementById('audio-player');  // Audio element

    let isPowerOn = true;
    let timer;

    // Update the clock every second
    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);

    // Simulate temperature fluctuation
    function updateTemperature() {
        const randomTemp = (Math.random() * 10 + 30).toFixed(1);
        temperatureDisplay.innerText = `Temp: ${randomTemp}°F`;
    }
    setInterval(updateTemperature, 5000);

    powerButton.addEventListener('click', () => {
        isPowerOn = !isPowerOn;
    });

    // Display Fridge View
    fridgeBtn.addEventListener('click', () => {
        clearDisplays();
        fridgeDisplay.style.display = 'block';
    });

    // Display TV View
    tvBtn.addEventListener('click', () => {
        clearDisplays();
        tvDisplay.style.display = 'block';
    });

    // Display Google Image when Browser Button is clicked
    browserBtn.addEventListener('click', () => {
        clearDisplays();
        browserDisplay.style.display = 'block';
    });

    // Play or pause the song when Music Player button is clicked
    musicPlayerBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            musicPlayerBtn.innerText = 'Pause Music';  // Update button text to "Pause"
        } else {
            audioPlayer.pause();
            musicPlayerBtn.innerText = 'Play Music';  // Update button text to "Play"
        }
    });

    // Add Item to Shopping List
    addItemBtn.addEventListener('click', () => {
        const newItem = newItemInput.value.trim();
        if (newItem) {
            const listItem = document.createElement('li');
            listItem.textContent = newItem;
            itemsList.appendChild(listItem);
            newItemInput.value = '';
        }
    });

    // Start Timer with Alert When Finished
    startTimerBtn.addEventListener('click', () => {
        let time = parseInt(timerInput.value) * 60;
        timerDisplay.innerText = `Time: ${time}s`;
        clearInterval(timer);
        timer = setInterval(() => {
            if (time > 0) {
                time -= 1;
                timerDisplay.innerText = `Time: ${time}s`;
            } else {
                clearInterval(timer);
                alert('Timer finished!');
            }
        }, 1000);
    });

    // Helper function to hide all displays
    function clearDisplays() {
        fridgeDisplay.style.display = 'none';
        tvDisplay.style.display = 'none';
        browserDisplay.style.display = 'none';
    }
});
