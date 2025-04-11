function calcularResultados() {
    let valorInicial = document.getElementById('input-valorInicial').value;
    let investMensal= document.getElementById('input-investMensal').value;
    let jurosAno = document.getElementById('input-juros_ano').value;
    let numMeses = document.getElementById('input-numMeses').value;
    let mesInicial = document.getElementById('input-mesInicial').value;
    let anoInicial = document.getElementById('input-anoInicial').value;

    // TESTE DOS VALORES DOS INPUTS
    document.getElementById('resultados').innerHTML = valorInicial + " | " +
        investMensal + " | " + jurosAno + " | " + numMeses + " | " + mesInicial + " | " +
        anoInicial;

    for (let i; i <= numMeses; i++) {
        // document.getElementById('resultados').innerHTML = 
        //     "<table class='tbl-titulos'>" +
        //         "<tr>" +
        //             "<td>Sequência</td>" +
        //             "<td>Mês</td>" +
        //             "<td>Ano</td>" +
        //             "<td>Valor interior</td>" +
        //             "<td>Rendimento</td>" +
        //             "<td>Valor final</td>" +
        //         "</tr>" +
        //     "</table>";
    }

    

} 


function reset() {
    document.getElementById('resultados').innerHTML = "";
}