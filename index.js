function createCountryListItem(country) {
    const listItem = document.createElement('li');
    const countryName = document.createElement('span');
    countryName.textContent = country.name.common;
    listItem.appendChild(countryName);
    return listItem;
  }

  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      const countryList = document.getElementById('country-list');
      data.forEach(country => {
        const listItem = createCountryListItem(country);
        countryList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error fetching countries:', error);
    });