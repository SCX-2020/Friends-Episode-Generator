function getRandomEpisode() {
    // Generate a random number between 1 and 236
    const episodeNumber = Math.floor(Math.random() * 236) + 1;

    // Redirect the user to the randomly generated episode
    window.location.href = `https://www.netflix.com/watch/70153404?trackId=${episodeNumber}`;
}

document.getElementById("random-episode-button").addEventListener("click", getRandomEpisode);
