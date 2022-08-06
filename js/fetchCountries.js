import Notiflix from 'notiflix';

export const findCountry = countries => {
  return fetch(
    `https://restcountries.com/v2/name/${countries}?fields=flags,name,capital,population,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(
        Notiflix.Notify.failure('Oops, there is no country with that name')
      );
    }

    return response.json();
  });
};
