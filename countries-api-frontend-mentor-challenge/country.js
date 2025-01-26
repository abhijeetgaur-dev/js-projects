const countryName = new URLSearchParams(location.search).get('name');

const countryFlag = document.querySelector(".country-flag");
const countryTitle = document.querySelector(".country-title");
const countryPopulation = document.querySelector(".country-population");
const countryRegion = document.querySelector(".country-region");


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=>res.json())
.then((data)=> {
    const country = data[0];
    console.log(Object.keys(country.currencies))
    console.log(country)


    countryFlag.src = country.flags.svg;
    countryTitle.innerText = country.name.common;
    if(country.name.nativeName){
        const countryNativeName = document.querySelector(".country-nativeName");
        countryNativeName.innerText = Object.keys(country.name.nativeName).join(", ");
      }
    countryPopulation.innerText = country.population.toLocaleString('en-IN');
    countryRegion.innerText = country.region;

    if(country.subregion){
        const countrySubregion = document.querySelector(".country-subregion");
        countrySubregion.innerText = country.subregion;
    }

    if(country.capital){
        const countryCapital = document.querySelector(".country-capital");
        countryCapital.innerText = country.capital.join(", ");
    }

    if(country.tld){
        const countryTld = document.querySelector(".country-tld");
        countryTld.innerText = country.tld.join(", ");
    }

    if(country.currencies){
        const countryCurrencies = document.querySelector(".country-currencies");
        countryCurrencies.innerText = Object.keys(country.currencies).join(", ");
    }

    if(country.languages){
        const countryLanguages = document.querySelector(".country-languages");
        countryLanguages.innerText = Object.keys(country.languages).join(", ");
    }

    if(country.borders){
        const countryBorders = document.querySelector(".country-borders");
        Object.values(country.borders).forEach((border) => {
            console.log(border)
            fetch(`https://restcountries.com/v3.1/alpha/${border}`).then(res=> res.json()).then(data=>{
                console.log(data)
                const borderCountries = document.querySelector(".border-countries-content");
                const borderElement = document.createElement('a')
                borderElement.innerText = data[0].name.common;
                borderElement.href = "./country.html?name="+data[0].name.common;

                borderCountries.append(borderElement);
                
            })
            // const borderElement = document.createElement('a');
            // borderElement.classList.add('border');
            // borderElement.href = `./country.html?name=${border}`;
            // borderElement.innerText = border;
            // countryBorders.append(borderElement);
        })
    }
})