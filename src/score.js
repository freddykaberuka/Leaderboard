class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

    dataScore = [];

    baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/';

getScore = () => {
  const listScore = document.querySelector('.list');
  listScore.innerHTML = this.dataScore.map((el, index) => `<div class=${index % 2 !== 0 ? 'list1' : 'list2'}>${el.user}:${el.score}</div>`).join('');
}

fetchScore = async () => {
  try {
    const data = await fetch(this.baseUrl);
    const response = await data.json();
    this.dataScore = [...response.result];
    return this.getScore();
  } catch (error) {
    return error;
  }
};

addScore = async ({ user, score }) => {
  try {
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    };
    const data = await fetch(this.baseUrl, config);
    const response = await data.json();
    this.dataScore = [...response.result];
    return this.fetchScore();
  } catch (error) {
    return error;
  }
}
}

export default Score;