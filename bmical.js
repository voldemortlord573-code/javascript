const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height <= 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height";
    }
    else if(weight <= 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid weight";
    }
    else{
        result.innerHTML = `${weight / (( height * height)/ 10000)}`
        console.log(result.innerHTML)
    }
})