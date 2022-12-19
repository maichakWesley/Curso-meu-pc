class CalcController{
    constructor(){
        this._dispayCalc = "0";
        this._dataAtal;
    }

    get dispayCalc(){
        return this._dispayCalc;

    }

    set dispayCalc(value){
        this._dispayCalc = value;
    }

    get dataAtal(){
        return this._dataAtal;

    }

    set dataAtal(value){
        this._dataAtal = value;
    }
}