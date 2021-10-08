function calculate() {
    const age = Number(document.getElementById("age").value)
    const weight = Number(document.getElementById("weight").value)
    const height = Number(document.getElementById("height").value)
    const gender = document.getElementById("gender").value
    const activity = Number(document.getElementById("activity-level").value)
    
    if (gender == 0 || age == 0 || weight == 0 || height == 0 || activity == 0) {
        window.alert("Insira todos os valores antes de calcular")
    } else if (gender == "female") {
        console.log("mulher")
    } else {
        console.log("homem")
    }
}





/*
<ul>
            <li>
              Seu metabolismo basal é de <strong>1606 calorias</strong>.
            </li>
            <li>
              Para manter o seu peso você precisa consumir em média <strong>1928 calorias</strong>.
            </li>
            <li>
              Para perder peso você precisa consumir em média <strong>1638 calorias</strong>.
            </li>
            <li>
              Para ganhar peso você precisa consumir em média <strong>2217 calorias</strong>.
            </li>
          </ul>
*/