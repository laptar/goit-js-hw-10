import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './api/fetchCountries';
import {
  renderCountryList,
  renderCountryItem,
  countryInfoEl,
  countryListEl,
} from './api/render-markup';

const DEBOUNCE_DELAY = 300;

const inputCoumtry = document.querySelector('#search-box');

inputCoumtry.addEventListener('input', debounce(findCountry, DEBOUNCE_DELAY));

function findCountry(evt) {
  const countryName = evt.target.value.trim();
  if (!countryName) {
    countryListEl.innerHTML = '';
    countryInfoEl.innerHTML = '';
    return;
  }
  const countryList = fetchCountries(countryName);
  console.log(evt.target.value);
  countryList
    .then(data => {
      // console.log(data);
      if (data.length === 1) {
        renderCountryItem(data);
      }
      if (data.length > 1 && data.length < 11) {
        renderCountryList(data);
      }
      if (data.length > 10) {
        countryListEl.innerHTML = '';
        countryInfoEl.innerHTML = '';
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => {
      countryListEl.innerHTML = '';
      countryInfoEl.innerHTML = '';
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
