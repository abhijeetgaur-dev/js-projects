fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=> {
    data.forEach((country) => {
        console.log(country)
    })

})
