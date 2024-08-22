const form = document.querySelector('form'); // form isliye select kiya kynki usme submit button hai
// this use case will give you a empty value
// const height = parseInt(document.querySelector('#height').Value);
// event 

form.addEventListener('submit', function(e){
    e.preventDefault(); 

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give the valid number";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give the valid number";
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(3);
        // show the result

        if(bmi < 18.6){
            results.innerHTML =`<span>${bmi}, underweight</span>`;
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML =`<span>${bmi},Normal Range</span>`;
        }else{
            results.innerHTML =`<span>${bmi}, Overweight</span>`;
        }
    }
})