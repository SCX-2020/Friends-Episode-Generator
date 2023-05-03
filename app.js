const episodes = [
  {
    season: 1,
    episode: 1,
    netflixId: '70272489'
  },
  {
    season: 1,
    episode: 2,
    netflixId: '70272490'
  },
  {
    season: 1,
    episode: 3,
    netflixId: '70272491'
  },
  // ... 其他季数和集数
  {
    season: 10,
    episode: 16,
    netflixId: '70272645'
  }
];

function getRandomEpisode() {
  const randomIndex = Math.floor(Math.random() * episodes.length);
  const episode = episodes[randomIndex];

  const netflixUrl = `https://www.netflix.com/watch/${episode.netflixId}`;
  const episodeTitle = `Season ${episode.season}, Episode ${episode.episode}`;
  const episodeInfo = `Watch "${episodeTitle}" on <a href="${netflixUrl}" target="_blank">Netflix</a>`;

  document.getElementById('episode-info').innerHTML = episodeInfo;
}

document.getElementById('random-episode-button').addEventListener('click', getRandomEpisode);
