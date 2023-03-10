const getScores = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YWd5s9CUJs7cCETUjmBx/scores/', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

const fetching = async () => {
  try {
    const board = await getScores();
    const scoreBoard = await board.json();
    return scoreBoard.result;
  } catch (err) {
    return { result: [] };
  }
};

export default fetching;