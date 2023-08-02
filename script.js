let celsius = document.getElementById('celsius');
let farenheit = document.getElementById('farenheit');
let kelvin = document.getElementById('kelvin');

celsius.oninput=()=>{
    //c -> F
    let output = (parseFloat(celsius.value)* 9)/5 +32;
    farenheit.value = parseFloat(output.toFixed(2));
    
    //c->K
    let out = (parseFloat(celsius.value)+273.15);
    kelvin.value= parseFloat(out.toFixed(2));
};
farenheit.oninput=()=>{
    //f->C
    let output = ((parseFloat(farenheit.value)-32)*5)/9;
    celsius.value = parseFloat(output.toFixed(2));
//F -> K
    // let out = ((parseFloat(farenheit.value)-273.15)*9)/5+32;
    // kelvin.value = parseFloat(out.toFixed(2));
};
kelvin.oninput =()=>{
    //K->C
   let output = (parseFloat(kelvin.value)-273.15)
    celsius.value = parseFloat(output.toFixed(2));

    //K->F
    let out = ((parseFloat(kelvin.value)-273.15)*9)/5+32;
    farenheit.value = parseFloat(out.toFixed(2));
};