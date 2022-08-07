export const countryInfo = country => {
  return country
    .map(
      ({ flags: { svg }, name, capital, population, languages }) =>
        `<h2><img src=${svg} alt=${name} width='40' /> ${name}</h2>
      <li><b>Capital: </b>${capital}</li>
      <li><b>Population: </b>${population}</li>
      <li><b>Languages: </b>${languages.map(language => language.name)}</li>
      `
    )
    .join('');
};
