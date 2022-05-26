const showMore = document.getElementById('more');
const showLess = document.getElementById('less');
const listScore = document.querySelector('.list');

const display = () => {
  if (showMore) {
    showMore.addEventListener('click', () => {
      listScore.style.height = 'auto';
      showMore.style.display = 'none';
      showLess.style.display = 'block';
    });
  }
  if (showLess) {
    showLess.addEventListener('click', () => {
      listScore.style.height = '50vh';
      showMore.style.display = 'block';
      showLess.style.display = 'none';
    });
  }
};

export default display;