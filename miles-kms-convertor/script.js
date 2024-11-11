function convert(){
    let kms =  document.getElementById('text-input').value;

    let miles = kms * 0.621371;
    console.log(miles)


    document.getElementById('result').innerText = `${miles} Miles`;
}