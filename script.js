function calculate() {
    const age = Number(document.getElementById("age").value)
    const weight = Number(document.getElementById("weight").value)
    const height = Number(document.getElementById("height").value)
    const gender = document.getElementById("gender").value
    const activity = Number(document.getElementById("activity-level").value)
    let wait = document.getElementById("wait")
    let alert = document.getElementById("alert")

    const imc = (weight/((height/100)*(height/100))).toFixed(2)
    const tmbFemale = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
    const tmbMale = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
    
    let imcresult = ""
    if (imc < 18.5) {
            imcresult = "Abaixo do peso"
    } else if (imc < 25) {
            imcresult = "Normal"
    } else if (imc < 30) {
            imcresult = "Sobrepeso"
    } else if (imc < 40) {
            imcresult = "Obesidade"
    } else {
            imcresult = "Obesidade mórbida"
    }
    
    if (gender == 0 || age == 0 || weight == 0 || height == 0 || activity == 0) {
        alert.innerHTML = ""
        alert.insertAdjacentHTML("afterbegin", "<p><strong>* Insira todos os valores antes de calcular</strong></p>")
    } else if (gender == "female") {
        tmbResult(tmbFemale, imc, activity, imcresult)
        alert.innerHTML = ""
        clearInput()
    } else {
        tmbResult(tmbMale, imc, activity, imcresult)
        alert.innerHTML = ""
        clearInput()
    }
}


function tmbResult(value, imc, activity, imcresult) {
    const result = document.querySelector(".result-content")

    wait.innerHTML = ""
    
    result.insertAdjacentHTML("afterbegin", /*html*/ `
        <h3>Aqui está o seu resultado:</h3>  
        <p>Seu IMC é <strong>${imc}</strong></p> 
        <p>Sua classificação é de <strong>${imcresult}</strong>
        <p>Seu metabolismo basal é de <strong>${Math.round(value)} calorias</strong>.</p>
        <p>Para manter o seu peso você precisa consumir em média <strong>${Math.round(value*activity)} calorias</strong>.</p>
        <p>Para perder peso você precisa consumir em média <strong>${Math.round(value*activity-450)} calorias</strong>.</p>
        <p>Para ganhar peso você precisa consumir em média <strong>${Math.round(value*activity+450)} calorias</strong>.</p>
    `)
}

function clearInput() {
    age.value = ""
    weight.value = ""
    height.value = ""
    gender.value = 0
    activity.value = 0
}