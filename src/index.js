const debounce = require('lodash.debounce');

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

function findCountry(country) {
  return fetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name.official,capital,population,flags.svg,languages`
  ).then(response => response.json());
}

findCountry('Ukrain').then(country => {
  console.log(country);
});

const searchBox = document.querySelector('#search-box');

searchBox.addEventListener('input', debounce(onInputEnter, DEBOUNCE_DELAY));

function onInputEnter(e) {
  const inputValue = e.target.value;
}
