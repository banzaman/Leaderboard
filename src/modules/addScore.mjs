const addScore = (name, value) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YWd5s9CUJs7cCETUjmBx/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
    });
};
export default addScore;