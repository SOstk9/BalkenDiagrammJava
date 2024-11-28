import { BarChart } from "./BarChart.js";

window.onload = function () {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    


    let daten =
    {
        "C#": 20,
        "Java": 50,
        "C++": 30,
        "JavaScript": 20
    };



    let a = new BarChart(daten, context);
    a.DrawChart();
}


