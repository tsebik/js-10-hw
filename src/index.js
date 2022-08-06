import Notiflix from 'notiflix';
import { findCountry } from '../js/fetchCountries';
import './css/styles.css';

const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const ul = document.querySelector('.country-list');
const div = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onInputEnter, DEBOUNCE_DELAY));

function onInputEnter(e) {
  findCountry(e.target.value.trim())
    .then(country => {
      makeCountryMarkup(country);
    })
    .catch(error => {
      console.log(error);
    });
}

function makeCountryMarkup(country) {
  if (country.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (country.length >= 2 && country.length <= 10) {
    countryList(country);
    div.innerHTML = '';
  } else {
    countryInfo(country);
    ul.innerHTML = '';
  }
}

function countryList(country) {
  const data = country
    .map(
      ({ flags: { svg }, name }) =>
        `<li><img src=${svg} alt=${name} width='40' /> ${name}</li>`
    )
    .join('');
  ul.innerHTML = data;
}

function countryInfo(country) {
  const data = country
    .map(
      ({ flags: { svg }, name, capital, population, languages }) =>
        `<h2><img src=${svg} alt=${name} width='40' /> ${name}</h2>
      <li><b>Capital: </b>${capital}</li>
      <li><b>Population: </b>${population}</li>
      <li><b>Languages: </b>${languages[0].name}</li>
      `
    )
    .join('');
  div.innerHTML = data;
}
