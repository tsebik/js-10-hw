import Notiflix from 'notiflix';
import { findCountry } from '../js/fetchCountries';
import { countryInfo } from '../js/country-info';
import { countryList } from '../js/country-list';
import './css/styles.css';

const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const ul = document.querySelector('.country-list');
const div = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onInputEnter, DEBOUNCE_DELAY));

function onInputEnter(e) {
  const inputValue = e.target.value.trim();

  if (inputValue === '') {
    ul.innerHTML = '';
    div.innerHTML = '';
    return;
  }

  findCountry(inputValue)
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
    ul.innerHTML = countryList(country);
  } else {
    countryInfo(country);
    ul.innerHTML = '';
    div.innerHTML = countryInfo(country);
  }
}
