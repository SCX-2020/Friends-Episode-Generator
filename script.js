const episodes = [
  {
    title: "The One Where Monica Gets a Roommate",
    season: 1,
    episode: 1,
    summary: "Monica's high school friend Rachel arrives in New York City to run from her wedding. Monica invites her to stay at her apartment and introduces her to the gang; Ross, her older brother, Chandler, Joey, and Phoebe. Rachel learns that her ex-fiancé, Barry, has dumped her.",
    url: "https://www.bilibili.com/bangumi/play/ep32517"
  },
  {
    title: "The One with the Sonogram at the End",
    season: 1,
    episode: 2,
    summary: "Carol, Ross's lesbian ex-wife, tells him at work that she is pregnant with his child, Monica nearly has a breakdown when her parents come for dinner, and Rachel finds out that Barry and her maid of honor Mindy, went on her honeymoon.",
    url: "https://www.bilibili.com/bangumi/play/ep32518"
  },
  {
    title: "The One with the Thumb",
    season: 1,
    episode: 3,
    summary: "Chandler's co-workers think he's gay and Ross's new girlfriend won't stop laughing at everything he says. Meanwhile, Phoebe discovers that her long-lost father is a pharmacist and Rachel accidentally loses Ross's monkey.",
    url: "https://www.bilibili.com/bangumi/play/ep32519"
  },
];

const recommendBtn = document.getElementById("recommend-btn");
const episodeInfo = document.getElementById("episode-info");

recommendBtn.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * episodes.length);
  const recommendedEpisode = episodes[randomIndex];

  episodeInfo.innerHTML = `
    <h2>Recommended Episode: Season ${recommendedEpisode.season}, Episode ${recommendedEpisode.episode}</h2>
    <h2>${recommendedEpisode.title}</h2>
    <p>${recommendedEpisode.summary}</p>
    <a href="${recommendedEpisode.url}" target="_blank">Watch on Bilibili</a>
  `;
  episodeInfo.style.display = "block";
});
