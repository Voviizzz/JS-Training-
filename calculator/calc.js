let calc = new Calculator; 

function Calculator(){
    this.method = {
        "+": (a,b) => a+b,
        "-": (a,b) => a-b,
    }
  
    this.caculation = function (str){
        let split = str.split(' ')
        a = +split[0],
        oper = split[1],
        b = +split[2]
        return this.method[oper](a,b)
    }
   
    this.addOper = function(name,func){
        this.method[name] = func;
    }
}

let multiplicat = new Calculator;

multiplicat.addOper('*', (a,b) => a*b);


alert(multiplicat.caculation('3 * 5'))