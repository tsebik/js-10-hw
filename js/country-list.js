export const countryList = country => {
  return country
    .map(
      ({ flags: { svg }, name }) =>
        `<li><img src=${svg} alt=${name} width='40' /> ${name}</li>`
    )
    .join('');
};
