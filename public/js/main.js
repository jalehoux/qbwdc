console.log("Tableau We Data Connector Fired Up");
(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        getJSON('/schema',function(data){
        var tables = JSON.parse(data)  
        schemaCallback(tables); 
            });
        };

    myConnector.getData = function (table, doneCallback) {
        getJSON('/data');
    };

    tableau.registerConnector(myConnector);
})();

$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "Quick Base WDC";
        tableau.submit();
    });
});

function getJSON(path, cb) {
    $.get(path)
    .then(function(data) { 
        console.log(data); 
    });
}
