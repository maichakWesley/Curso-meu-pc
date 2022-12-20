class CalcController{
    constructor(){
        this._operation = [];
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){
       

        this.setDisplayDateTime();

       setInterval(() => {
            this.setDisplayDateTime();
       }, 1000);

       this.setlastnumbertodisplay();


    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    clearAll(){
        this._operation = [];
        this.setlastnumbertodisplay();
    };

    clearEntry(){
        this._operation.pop();
        this.setlastnumbertodisplay();

    };

    getLastOperation(){
        return this._operation[this._operation.length-1];
    }

    isOperator(value){
       return (['+','-','*','%','/'].indexOf(value) > -1);
     }

     setLastOperation(value){
        this._operation[this._operation.length-1] =value;
     }

     pushOperation(value){
        this._operation.push(value);

        if(this._operation.length > 3){

            
            console.log(this._operation);
            this.calc();

        }
     }

     calc(){

        let last ='';
        if (this._operation.length > 3 ){
            last = this._operation.pop();
        }
        
        let result = eval(this._operation.join(""));

        if(last == '%'){
            result = result / 100;
            this._operation = [result];
        }else{
            this._operation = [result];

            if(last) this._operation.push(last);
        }

        

        
        this.setlastnumbertodisplay();
     }
    
     setlastnumbertodisplay(){
        let lastnumber;
        for(let i = this._operation.length-1; i >= 0; i--){
            if(!this.isOperator(this._operation[i])){
                lastnumber = this._operation[i];
                break;
            }
        }

        if(!lastnumber) lastnumber = 0;
        this.dispayCalc = lastnumber; 
     }

    addOperator(value){

        if (isNaN(this.getLastOperation())){
            //string
            if (this.isOperator(value)){
                //trocar operador
                this.setLastOperation(value);
            }else if(isNaN(value)){
                
                //outra coisa
                console.log(value);
                
            }else{
                this.pushOperation(value);
                this.setlastnumbertodisplay();
            }

        }else{

            if(this.isOperator(value)){
                this.pushOperation(value);
            }else{
                //numero
            let newValue = this.getLastOperation().toString() + value.toString();
            this.setLastOperation(parseInt(newValue));

            //atualizar display
                this.setlastnumbertodisplay();

            }


            
        }

        
    }

    setError(){
        this.dispayCalc = "Error";
    };

    execBtn(value){
        switch(value){
            case 'ac':
                this.clearAll();
                break;
            
                case 'ce':
                    this.clearEntry();
                    break;
                case 'soma':
                    this.addOperator('+');
                    break;
                    case 'subtracao':
                        this.addOperator('-');
                    break;

                    case 'divisao':
                        this.addOperator('/');
                    break;
                    case 'multiplicacao':
                        this.addOperator('*');
                    break;
                    case 'porcento':
                        this.addOperator('%');
                    break;
                    case 'igual':
                        this.calc();
                    
                    break;

                    case 'ponto':
                        this.addOperator('.');
                    break;

                    case '0':
                        case '1':
                            case '2':
                                case '3':
                                    case '4':
                                        case '5':
                                            case '6':
                                                case '7':
                                                    case '8':
                                                        case '9':
                                                            this.addOperator(parseInt(value));
                                                            break;


                default:
                    this.setError();
                    break;
        }
    }

    initButtonsEvents(){
       let buttons =  document.querySelectorAll("#buttons >g, #parts >g");
        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn,"click drag", e=>{
                let textBtn = btn.className.baseVal.replace("btn-", "");
                console.log(textBtn);
                this.execBtn(textBtn);
            });
            this.addEventListenerAll(btn,"mouseover mouseup mousedown", e =>{
                btn.style.cursor = "pointer";
            });
        });

    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{day: "2-digit", month: "long", year: "numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get dispayCalc(){
        return this._displayCalcEl.innerHTML;

    }

    set dispayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();

    }

    set currentDate(value){
        this._currentDate = value;
    }
}