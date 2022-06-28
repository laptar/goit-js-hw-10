const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');
function renderCountryList(data) {
  const countryElem = data.map(
    elem =>
      `<li><img src="${elem.flags.svg}" alt="${elem.name.common}"/><p>${elem.name.common}</p></li>`
  );
  countryInfoEl.innerHTML = '';
  countryListEl.innerHTML = countryElem.join('');
}

function renderCountryItem(data) {
  const countryElem = data.map(elem => {
    console.log(Object.values(elem.languages).join(', '));
    return `<div><img src="${elem.flags.svg}" alt="${
      elem.name.common
    }" width='300px'/><p>${elem.name.common}</p></div>
      <p>Capital:&nbsp;<span>${elem.capital}</span></p>
      <p>Population:&nbsp;<span>${elem.population}</span></p>
      <p>Languages:&nbsp;<span>${Object.values(elem.languages).join(
        ', '
      )}</span></p>`;
  });

  countryListEl.innerHTML = '';
  countryInfoEl.innerHTML = countryElem.join();
}

export { renderCountryList, renderCountryItem, countryInfoEl, countryListEl };
