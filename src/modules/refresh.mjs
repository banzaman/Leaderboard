import buildScore from './buildScore.mjs';

const freshBtn = document.querySelector('#freshBtn');

const refresh = () => {
  freshBtn.addEventListener('click', () => {
    buildScore();
  });
};

export default refresh;