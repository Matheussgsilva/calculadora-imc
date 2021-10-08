function calculate() {
    const age = Number(document.getElementById("age").value)
    const weight = parseFloat(document.getElementById("weight").value)
    const height = parseFloat(document.getElementById("height").value)
    const gender = document.getElementById("gender").value
    const activity = Number(document.getElementById("activity-level").value)

    const imc = (weight/(height*height)).toFixed(2)
    const tmbFemale = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
    const tmbMale = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
    
    if (gender == 0 || age == 0 || weight == 0 || height == 0 || activity == 0) {
        window.alert("Insira todos os valores antes de calcular")
    } else if (gender == "female") {
        tmbResult(tmbFemale, imc, activity)
    } else {
        tmbResult(tmbMale, imc, activity)
    }
}


function tmbResult(value, imc, activity) {
    const result = document.querySelector(".result-content")

    result.innerHTML = /*html*/ `
        <h3>Aqui está o seu resultado:</h3>  
        <p>Seu IMC é <strong>${imc}</strong></p>  
        <p>Seu metabolismo basal é de <strong>${Math.round(value)} calorias</strong>.</p>
        <p>Para manter o seu peso você precisa consumir em média <strong>${Math.round(value*activity)} calorias</strong>.</p>
        <p>Para perder peso você precisa consumir em média <strong>${Math.round(value*activity-450)} calorias</strong>.</p>
        <p>Para ganhar peso você precisa consumir em média <strong>${Math.round(value*activity+450)} calorias</strong>.</p>
    `

}