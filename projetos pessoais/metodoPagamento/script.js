//Switch Case - Menu
//if

//Metodos de pagamento
//1 - pix - 10% de desconto
//2- debito-5% de desconto
//3 - credito -Valor Total
function cacularPagamento() {

    let formaPagamento = "pix"
    let valorTotal = 100
    let valorFinal

    switch (formaPagamento) {
        case "pix":
            valorFinal = valorTotal * 0.9
            console.log(valorFinal);
            break
        case "debito":
            valorFinal = valorTotal * 0.95
            console.log(valorFinal);
            break
        case "credito":
            console.log(valorTotal);
            break
        default:
            console.log("Informe uma forma de pagamento válida");
            break
    }
}