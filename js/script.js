const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();
const countryDiv = document.getElementById('countires');
const displayCountries = countries => {
    countries.forEach(country => {
        // console.log(country.name.common);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
                <h3>${country.name.common}</h3>
                <button onclick = "loadCountryByName('${country.name.common}')">Details</button>
        `;
        countryDiv.appendChild(div);
        countryDiv.style.textAlign = 'center';
    });
}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
}
const displayCountryDetail = country => {
    const languages = country.languages;
    for(const prop in languages){
        languageName = languages[prop];
    }
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `
            <h1>Country Details</h1>
            <h2>${country.name.common}</h2>
            <h5>${country?.capital}</h5>
            <h5>${languageName}</h5>
            <p>population:${country.population}</p>
            <img width = '300px' src="${country.flags.png}">
            

    `;
    detailsDiv.style.textAlign = 'center';
}