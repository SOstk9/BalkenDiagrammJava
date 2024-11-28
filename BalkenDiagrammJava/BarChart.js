

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
            this._canvas.fillRect(0, y, this._dataObject[data] * 10, 20);
            y += 20;
            i++;
        }
        y = 0;
        i = 0;
        for (let data in this._dataObject) {


            this._canvas.fillStyle = "white";
            this._canvas.fillText(data, 0, y + 15, 250);
            y += 20;
            i++;
        }

    }
}
