import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const ul = document.querySelector('.country-list');
const div = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onInputEnter, DEBOUNCE_DELAY));

function findCountry(countries) {
  return fetch(
    `https://restcountries.com/v2/name/${countries}?fields=flags,name,capital,population,languages`
  ).then(response => response.json());
}

function onInputEnter(e) {
  findCountry(e.target.value.trim()).then(country => {
    makeCountryMarkup(country);
  });
}

function makeCountryMarkup(country) {
  if (country.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}
