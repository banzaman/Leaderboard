import './style.css';
import formBtn from './modules/scoreBtn.mjs';
import refresh from './modules/refresh.mjs';

window.addEventListener('DOMContentLoaded', () => {
  refresh();
  formBtn();
});