const calculate = () => {
    const number = document.getElementById('temp').value;
    const selected = document.getElementById('change')
    const value = change.options[selected.selectedIndex].value;

    let result;
    if(value == 'celsius'){
        result = Math.round((number*9/5) + 32)
        document.getElementById('result').innerHTML=`${result}° Farenheit`;
    }
    else{
        result = Math.round((number - 32)*5/9)
        document.getElementById('result').innerHTML=`${result}° Celsius`;   
    }
};