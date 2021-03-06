"use strict"
//fetch csv data -> convert to object format -> plot radar chart
app.controller("radarCtrl", function($scope, $http) {//angular controller
  $http.get("http://cricapi.com/api/playerStats?pid=35320")//asyncronous request to api
  .then(function(res) {

    var objSachin = res.data;//create valid object
    //batting data
    var batTwenty20 = objSachin.data.batting.twenty20.Ave;
    //console.log(dataTwenty20);//test
    var batListA = objSachin.data.batting.listA.Ave;
    var batFirstClass = objSachin.data.batting.firstClass.Ave;
    var batT20I = objSachin.data.batting.T20Is.Ave;
    var batODI = objSachin.data.batting.ODIs.Ave;
    var batTest = objSachin.data.batting.tests.Ave;

    //bowling data
    var ballTwenty20 = objSachin.data.bowling.twenty20.Ave;
    //console.log(ballTwenty20);//test
    var ballListA = objSachin.data.bowling.listA.Ave;
    var ballFirstClass = objSachin.data.bowling.firstClass.Ave;
    var ballT20I = objSachin.data.bowling.T20Is.Ave;
    var ballODI = objSachin.data.bowling.ODIs.Ave;
    var ballTest = objSachin.data.bowling.tests.Ave;


    var radarC = document.getElementById("radarChart");//grab line canvas//create line chart ID for further rendering
    var radarChart = new Chart(radarC, {//create radar chart
      type: "radar",//specify chart type
      data: {//chart configuration data
        labels: ["Twenty20","List-A","First Class","T20I","ODI","Test"],//radar labels
        datasets: [
          {//batting radar
            label: "Batting Averages",
            borderColor: "rgb(255,165,0)",
            borderWidth: 2,
            backgroundColor: "rgba(255,165,0,0.2)",
            data: [batTwenty20,batListA,batFirstClass,batT20I,batODI,batTest]
          },
          {//bowling radar
            label: "Bowling Averages",
            borderColor: "rgb(0,165,255)",
            borderWidth: 2,
            backgroundColor: "rgba(0,165,255,0.2)",
            data: [ballTwenty20,ballListA,ballFirstClass,ballT20I,ballODI,ballTest]
          }
        ]
      },
      options: {
        scales: {
          ticks: {
            beginAtZero: true
          }
        }
      }
    });
  });
});
