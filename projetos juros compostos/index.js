function calcularResultados() {
    let valorInicial = document.getElementById('input-valorInicial').value;
    let investMensal= document.getElementById('input-investMensal').value;
    let jurosAno = document.getElementById('input-juros_ano').value;
    let numMeses = document.getElementById('input-numMeses').value;
    let mesInicial = document.getElementById('input-mesInicial').value;
    let anoInicial = document.getElementById('input-anoInicial').value;
    
    let resultadoFinal;

    for (let i=0; i <= numMeses; i++) {
        resultadoFinal += document.getElementById('resultados').innerHTML = 
            document.getElementById('resultados').innerHTML = 
                "<table class='tbl-titulos'>" +
                    "<tr>" +
                        "<td>Sequência</td>" +
                        "<td>Mês</td>" +
                        "<td>Ano</td>" +
                        "<td>Valor interior</td>" +
                        "<td>Rendimento</td>" +
                        "<td>Valor final</td>" +
                    "</tr>" +
                "</table>";
    }

    document.getElementById('resultados').innerHTML = resultadoFinal;

} 


function reset() {
    document.getElementById('resultados').innerHTML = "";
}