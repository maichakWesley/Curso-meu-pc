class CalcController{
    constructor(){
        //criando um array para guarda os valores da operação 
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        
        this.initialize();
        this.initButtonsEvents();
        
    }

    initialize(){

        this.setDisplayDateTime();
      setInterval(()=>{
        this.setDisplayDateTime();
        
      },1000)
    }

    //criando evento para botão. Evento click e drag. Pessoal do curso criou essa função.
    //recupera o vento btn, click drag, tranforma em um array. É feito isso porque o addEventListenerAll pega 1 eveneto por vez e aqui queremos recuperar mais.
    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
            
        });
    }

    //metodo para apagar tudo função ac calculadora
    ClearAll(){
        this._operation = [];
    }

    //metodo para remover ultima operação
    clearEntry(){
        this._operation.pop();
    }

    //metodo para adicionar operação
    addOperator(value){
        this._operation.push(value);
        console.log(this._operation);
    }

    //metodo error
    setError(){
        this.dispayCalc = "Error";
    }

        
    
    //criando metodo para identificar o que estamos recebendo no botão se é valor ou operação
    execBtn(value){
        switch(value){
            case 'ac':
                this.ClearAll();
                break;

                case 'ce':
                    this.clearEntry;
                    break;

                    case 'porcentro':
                    
                    break;

                    case 'divisao':
                    
                    break;

                    case 'multiplicacao':
                    
                    break;

                    case 'subtracao':
                    
                    break;

                    case 'soma':
                    
                    break;

                    case 'igual':
                    
                    break;

                    case 'ponto':
                    
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
                    this.setError;
                    break;

        }
    }
    //eventos do botão
    initButtonsEvents(){
       let buttons = document.querySelectorAll("#buttons > g, #parts > g");

       buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag', e =>{
                let textBtn = btn.className.baseVal.replace("btn-","");
                console.log(textBtn, "retorno botão");

                //criando metodo para poder recuperar o valor no case 
                this.execBtn(textBtn);
            });
        //mudando cursor do mouse
        this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{
            btn.style.cursor = "pointer";
             });
        });
    
    }
    //metodo para criar a data e hora
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{day: "2-digit", month: "long", year: "numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    //get e set. get é usado para recuperar o valor do da variavel. set permite deixar inserir novo valor na variavel.
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
        return this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }

    
}