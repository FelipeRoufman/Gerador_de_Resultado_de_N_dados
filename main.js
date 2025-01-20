function gerarGrafico() {
    const numDados = parseInt(document.getElementById('numDados').value);
    const ladosDado = parseInt(document.getElementById('ladosDado').value);
    const numSimulacoes = parseInt(document.getElementById('numSimulacoes').value);

    const resultados = [];
    for (let i = 0; i < numSimulacoes; i++) {
        let soma = 0;
        for (let j = 0; j < numDados; j++) {
            soma += Math.floor(Math.random() * ladosDado) + 1;
        }
        resultados.push(soma);
    }

    const freq = {};
    resultados.forEach((resultado) => {
        freq[resultado] = (freq[resultado] || 0) + 1;
    });

    const valores = Object.keys(freq).map(Number).sort((a, b) => a - b);
    const frequenciasRelativas = valores.map(v => freq[v] / numSimulacoes);

    const data = [{
        x: valores,
        y: frequenciasRelativas,
        type: 'bar',
        marker: {
            color: 'red'
        }
    }];

    const layout = {
        title: {
            text: 'Distribuição de Resultados - Lançamento de Dados',
            font: {
                color: 'white'
            }
        },
        xaxis: {
            title: 'Soma dos Valores',
            titlefont: {
                color: 'white'
            },
            tickfont: {
                color: 'white'
            }
        },
        yaxis: {
            title: 'Frequência Relativa',
            titlefont: {
                color: 'white'
            },
            tickfont: {
                color: 'white'
            }
        },
        paper_bgcolor: 'black',
        plot_bgcolor: 'black',
        font: {
            color: 'white'
        }
    };

    Plotly.newPlot('graficoBarras', data, layout);
}
