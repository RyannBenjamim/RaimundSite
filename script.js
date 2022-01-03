function calcular() {
    let res = document.getElementById("res")
    let preco = document.getElementById("pre")
    let unidades = document.getElementById("uni")

    let valor_unitario = Number(preco.value) / Number(unidades.value)
    let porcentagem = (valor_unitario * 30) / 100
    let valor_final = valor_unitario + porcentagem

    res.innerHTML = `Preço unitário: ${valor_final.toFixed(2)}$`
}

m