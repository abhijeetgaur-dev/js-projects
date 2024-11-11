const passlength = document.querySelector('#length')
const lowercase = document.querySelector('#lowercase')
const uppercase = document.querySelector('#uppercase')
const numbers = document.querySelector('#numbers')
const symbols = document.querySelector('#symbols')
const genPass = document.querySelector('#generate')
const result = document.querySelector('#display-pass')


let passStr= '';
const lowerStr = 'abcdefghijklmnopqrstuvwxyz'
const upperStr= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberStr = '012345679'
const symbolStr = '!@#$%^&*()_+'

genPass.addEventListener('click' , () => {
    if(lowercase.checked){
        passStr+=lowerStr;
    }
    if(uppercase.checked){
        passStr+=upperStr;
    }
    if(numbers.checked){
        passStr+=numberStr;
    }
    if(symbols.checked){
        passStr+=symbolStr;
    }

    let finalPass= ''

    for(let i=0; i<passlength.value; i++){
        let index = Math.floor(Math.random()*passStr.length)
        finalPass+=passStr[index];
    }
    console.log(finalPass)
    result.textContent = `${finalPass}`
    passStr=''
})