const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const weight=parseInt(document.getElementById('weight').value);
    const height=parseInt(document.getElementById('height').value);
    const results=document.getElementById('results');

    if(height==='' || isNaN(height) || height<=0){
        results.innerHTML='<h3>Please provide a valid height!</h3>';
      
    }
    else if(weight==='' || isNaN(weight) || weight<=0){
        results.innerHTML='<h3>Please provide a valid weight!</h3>';
    
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`<h3>Your BMI is: ${bmi}</h3>`;
    }
}
)