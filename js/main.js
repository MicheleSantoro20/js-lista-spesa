let listaSpesa = ['uva', 'pera', 'mela', 'banana', 'latte', 'biscotti', 'cereali'];


let nProdotti= 0;
let elementiSpesa = "";
let listaDom = document.getElementById ('lista');


while (nProdotti < listaSpesa.length -1) {
    console.log(listaSpesa[nProdotti]);
    const elementi = `<li>${listaSpesa[nProdotti]}</li>`;
    elementiSpesa += elementi;
    nProdotti++;

};

listaDom.innerHTML = elementiSpesa;

console.log(elementiSpesa);