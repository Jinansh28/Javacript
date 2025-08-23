const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    if(isNaN(height) || isNaN(weight)){
        result.innerHTML="Not a valid value"
    }    
    
    else{
    const BMI=(weight*100*100)/(height*height)
    if (BMI < 18.6) {
    result.innerHTML = " \nUnderWeight";
    } else if (BMI >= 18.6 && BMI <= 24.9) {
    result.innerHTML = " \nNormal";
    } else if (BMI > 24.9) {
    result.innerHTML = " \nOverWeight";
    }
}
    
})