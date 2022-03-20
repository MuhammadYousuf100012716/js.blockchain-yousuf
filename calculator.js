function calculator(param1 , param2 , type){
    if(type == "+"){
        console.log("ADD ="+(param1+param2));
    }
    else if (type == "-"){
        console.log("SUB ="+(param1-param2));
    }
    else if (type == "*"){
        console.log("MUL ="+(param1*param2));
    } 
    else if (type == "/"){
        console.log("DIV ="+(param1/param2));
    } 
    else if (type == "%"){
        console.log("PER ="+(param1/ param2)*100+"%");
    } 
    else if (type == "^"){
        console.log("SQR ="+(param1*param1));
    }
    else{
        console.log("not matched");
    }
}
calculator(100,200, "+");
calculator(100,200, "-");                                           
calculator(190,200, "*");                                         
calculator(6778,200,"/");              
calculator(998,200, "%");           
calculator(100,800, "^");                        
calculator(700,200, "$");