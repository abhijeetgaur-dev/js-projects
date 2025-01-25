const countryName = new URLSearchParams(location.search).get('name');
const countryBody = document.querySelector('.country-body');

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=>res.json())
.then((data)=> {
    const country = data[0];
    console.log(Object.values(country.name.nativeName)[0])
    console.log(country)
    countryBody.innerHTML = `
    <a class="back-button" href="#"><i class="fa-solid fa-arrow-left"></i> &nbsp;&nbsp;Back</a>
            <div class="each-country-content">
                    <img src="${country.flags.svg}" alt="${country.name.common}">
                <div class="country-details">
                    <h2>${country.name.common}</h2>
                    <div class="country-content">
                        <span><b>Native Name: </b>${Object.values(country.name.nativeName)[0].common}</span>
                        <span><b>Population: </b>${country.population.toLocaleString("en-IN")}</span>
                        <span><b>Region: </b> ${country.region}</span>
                        <span><b>Sub-Region: </b> ${country.subregion}</span>
                        <span><b>Capital: </b>${country.capital}</span>
                        <span><b>Top Level Domain: </b>${country.tld[0]}</span>
                        <span><b>Currencies: </b>${country.currencies}</span>
                        <span><b>Languages: </b>${country.languages}</span>
                    </div>
                    <div class="border-countries">
                        <b>Border Countries:</b>
                        <div class="border-countries-content">
                            <a href="#">Pakistan</a>
                            <a href="#">Tajikistan</a>
                            <a href="#">Uzbekistan</a>
                        </div>
                    </div>
            </div>
    `
})