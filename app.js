function getRandomEpisode() {
  const season = Math.floor(Math.random() * 10) + 1;
  const episode = Math.floor(Math.random() * 24) + 1;
  const result = document.getElementById("result");
  result.innerHTML = `Season ${season}, Episode ${episode}`;
}

document.getElementById("random-episode-button").addEventListener("click", getRandomEpisode);
