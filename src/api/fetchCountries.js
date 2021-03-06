const BASE_URL = 'https://restcountries.com/v2/name/';
const filterData = '?fields=name,capital,flags,languages,population';

function fetchCountries(nameCountry) {
  return fetch(`${BASE_URL}${nameCountry}${filterData}`)
    .then(res => {
      // console.log(res);
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => data);
}

export { fetchCountries };
