const qrinput = document.getElementById('qr-input')
const qrbutton = document.getElementById('qr-button')
const qrimg = document.getElementById('qr-img')


qrbutton.addEventListener('click', () =>{
    const qrtext= qrinput.value;
    if(!qrtext){
        alert("please enter text");
    }else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtext}`
        qrimg.alt= `qr-code for ${qrtext}`
    }

});