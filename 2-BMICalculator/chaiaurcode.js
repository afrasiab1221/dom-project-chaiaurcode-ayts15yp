const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.getElementById('height').value);

  const weight = parseInt(document.getElementById('weight').value);

  const results = document.querySelector('#results');

  if (
    height == '' ||
    height < 0 ||
    isNaN(height) ||
    weight == '' ||
    weight < 0 ||
    isNaN(weight)
  ) {
    results.innerHTML = 'Please give a valid input';
  } else {
    const answer = (weight / ((height * weight) / 10000)).toFixed(2);
    results.innerHTML = `${answer}`;
  }
});
