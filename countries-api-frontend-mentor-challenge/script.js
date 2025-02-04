const heroSection = document.querySelector('.hero-section');
fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=> {
    data.forEach((country) => {
        console.log(country.name.common + "{" +country.capital.join(", ")+"}")
        const countryCard = document.createElement('a');
        countryCard.classList.add('country-card');
        countryCard.href = `./country.html?name=${country.name.common}`;
        countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="" class="country-flag">
                    <div class="country-content">
                        <h3>${country.name.common}</h3>
                        <span><b>Population</b> : ${country.population.toLocaleString('en-IN')}</span>
                        <span><b>Region</b> : ${country.region}</span>
                        <span><b>Capital</b> : ${country.capital[0]}</span>
                    </div>
        `
        heroSection.append(countryCard);
    })

})
