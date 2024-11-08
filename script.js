function vlere() {
    alert("Loading weather report...");
}
function dissapear(button) {
    var x = document.getElementById(button);
    x.style.display = "none";
}


function handleChange() {
    var grada = document.getElementById('grade')
    console.log(grada.value)
    var vlera = grada.value;

    var element = document.querySelectorAll('.degree')
    console.log(element)
    console.log(element.length)
    for (var i = 0; i < element.length; i++) {
        var temperatura = parseFloat(element[i].innerHTML)
        if (vlera == 2) {
            var fahrenheit = (temperatura * 9 / 5) + 32;
            element[i].innerHTML = fahrenheit.toFixed(1) + '°F';
        }else{
            var celcius = (temperatura -32) * 5 / 9 ;
            element[i].innerHTML = celcius.toFixed() + '°C';
        }

    }

}



