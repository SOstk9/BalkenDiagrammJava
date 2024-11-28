export class BarChart {
    _dataObject;
    _canvas;
    constructor(dataObject, canvas) {
        this._dataObject = dataObject;
        this._canvas = canvas;
    }

    DrawChart() {

        let color = ["blue", "red", "green", "grey"];
        let y = 0;
        let i = 0;
        for (let data in this._dataObject) {

            this._canvas.fillStyle = color[i];
            this._canvas.fillRect(0, y, this._dataObject[data] * 10, 75);
            y += 75;
            i++;
        }
        y = 0;
        i = 0;
        for (let data in this._dataObject) {


            this._canvas.fillStyle = "white";
            this._canvas.font = "20px Arial";
            this._canvas.fillText(data, 10, y + 40, 250);
            y += 75;
            i++;
        }

    }
}
