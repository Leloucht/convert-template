//cotacao de moedas do dia
const USD = 5.91;
const EUR = 6.13;
const GBP = 7.50;
const IENE = 0.039;

// obtendo os elementos do formulario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");


// manipulando o input para obter somente numeros
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g;

    amount.value = amount.value.replace(hasCharacterRegex, "")
})

// manipulando o submit (enviar) do formulario
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value){
    case "USD":
        convertCurrency(amount.value, USD, "US$");
        break;
    case "EUR":
        convertCurrency(amount.value, EUR, "€");
        break;
    case "GBP":
        convertCurrency(amount.value, GBP, "£");
        break;
    case "IENE":
        convertCurrency(amount.value, IENE, "¥");
        break;
    }
}

//funcao de converter as moedas
function convertCurrency(amount, price, symbol){
    try {
        //exibindo a cotacao da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        //calculando o total
        let total = amount * price

        if(isNaN(total)){
            alert("por favor digite um numero para converter")
        }
        //exibindo e formatando o total
        result.textContent = `${formatCurrencyBRL(total).replace("R$", "")} Reais`
        //coloca uma classe para exibir o footer com os resultados
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)
        alert("nao foi possivel converter. tente novamente mais tarde")
    }
}
// funcao para formatar a moeda BRL
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}