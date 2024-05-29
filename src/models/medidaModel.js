var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT 
    SUM(CASE WHEN pontos >= 50 THEN 1 ELSE 0 END) AS acima,
    SUM(CASE WHEN pontos < 50 THEN 1 ELSE 0 END) AS abaixo
FROM 
    pontuacaoTotal`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}
