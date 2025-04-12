function calcularResultados() {
    let valorInicial = document.getElementById('input-valorInicial').value;
    let investMensal= document.getElementById('input-investMensal').value;
    let jurosAno = document.getElementById('input-juros_ano').value;
    let numMeses = document.getElementById('input-numMeses').value;
    let mesInicial = document.getElementById('input-mesInicial').value;
    let anoInicial = document.getElementById('input-anoInicial').value;
    let sequencia;
    
    let resultadoFinal = "";

    // if (valorInicial === "" || investMensal === "" || jurosAno === "" || numMeses === "" || mesInicial === "" || anoInicial === "") {}
    
    if (valorInicial != null) {
        resultadoFinal = "<p style='color: red; text-align: center;'>Há campos vazios!</p><br>" +
            "<table class='tbl-titulos'>" +
                "<tr>" +
                    "<td>Sequência</td>" +
                    "<td>Mês</td>" +
                    "<td>Ano</td>" +
                    "<td>Valor inicial</td>" +
                    "<td>Rendimento</td>" +
                    "<td>Valor final</td>" +
                "</tr>";
        
    } else {
        numMeses = parseInt(numMeses);

        for (let i = 0; i < numMeses; i++) {
            sequencia += 1;

            resultadoFinal += 
            "<table class='resultados'>" +
                    "<tr>" +
                        "<td>"+ sequencia +"</td>" +
                        "<td></td>" +
                        "<td></td>" +
                        "<td></td>" +
                        "<td></td>" +
                        "<td></td>" +
                    "</tr>" +
                "</table>";
        }

        resultadoFinal = "<table class='tbl-titulos'>" +
                "<tr>" +
                    "<td>Sequência</td>" +
                    "<td>Mês</td>" +
                    "<td>Ano</td>" +
                    "<td>Valor inicial</td>" +
                    "<td>Rendimento</td>" +
                    "<td>Valor final</td>" +
                "</tr>" +
                resultadoFinal +
            "</table>";      
    }

    document.getElementById('resultados').innerHTML = resultadoFinal;
} 

function reset() {
    document.getElementById('resultados').innerHTML = "";
}