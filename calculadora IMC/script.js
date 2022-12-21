
function calculo() {
    let peso = document.getElementById("peso").value
    let altura = (document.getElementById("altura").value)/100

    let imc = peso / altura**2;
    var text = ""

    if (imc <= 18.5){
        window.alert("Você está magrelo.")
    } else if (imc < 24.9) {
        window.alert("Você está normal.")
    } else if (imc < 29.9) {
        window.alert("Você está na categoria sobrepeso.")
    } else if (imc < 34.9) {
        window.alert("Você está obeso grau I.")
    } else if (imc < 39.9) {
        window.alert("Você está obeso grau II.")
    } else if (imc > 40) {
        window.alert("Você está obeso grau III.")
    }
    document.getElementByID("text-area").innerText = text
}