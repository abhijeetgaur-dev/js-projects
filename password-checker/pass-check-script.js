const passcheckinput = document.getElementById('pass-check-input')
const result = document.getElementById('result')

passcheckinput.addEventListener('input', () =>{
    console.log(passcheckinput.value);
    const pass = passcheckinput.value;

    if(pass.length < 8){
        result.innerText = "pass less than 8"
        result.style.color = 'red';
    }
    else if(pass.search(/[a-z]/) == -1){
        result.innerText = "pass does not conatain lowercase"
        result.style.color = 'red';
    }
    else if(pass.search(/[A-Z]/) == -1){
        result.innerText = "pass does not contain Uppercase"
        result.style.color = 'red';
    }
    else if(pass.search(/[0-9]/) == -1){
        result.innerText = "pass does not contain numbers"
        result.style.color = 'red';
    }
    else if(pass.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1){
        result.innerText = "pass does not contain special case"
        result.style.color = 'red';
    }
    else{
        result.innerText = "pass is strong";
        result.style.color = 'green';
    }
})