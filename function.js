function getvalue(param1 , param2 , type){
    if(type === "+"){
        sum(param1, param2)
    }
    else if (type === "-"){
        sub(param1, param2)
    }
    else{
        console.log("invalid type");
    }
}
function sum(p1,p2){
    let result = p1+p2;
    console.log("sum is = "+ result);
}
function sub(p1,p2){
    let result = p1-p2;
    console.log("sub is = "+ result);
}
getvalue(100,200, "+")
getvalue(100,200, "-")
getvalue(100,200, "*")

                                            //calculator//
                                            function calculator(param1 , param2 , type){
                                                if(type === "+"){
                                                    sum(param1, param2)
                                                }
                                                else if (type === "-"){
                                                    sub(param1, param2)
                                                }
                                                else if (type === "*"){
                                                    mul(param1, param2)
                                                }
                                                 else if (type === "/"){
                                                    div(param1, param2)
                                                }
                                                 else if (type === "%"){
                                                    per(param1, param2)
                                                }
                                                 else if (type === "^"){
                                                    sq(param1, param2)
                                                }
                                                else{
                                                    console.log("invalid type");
                                                }
                                            }
                                            function sum(p1,p2){
                                                let result = p1+p2;
                                                console.log("sum is = "+ result);
                                            }
                                            function sub(p1,p2){
                                                let result = p1-p2;
                                                console.log("sub is = "+ result);
                                            }
                                            function mul(p1,p2){
                                                let result = p1-p2;
                                                console.log("mul is = "+ result);
                                            }
                                            function div(p1,p2){
                                                let result = p1-p2;
                                                console.log("div is = "+ result);
                                            }
                                            function per(p1,p2){
                                                let result = p1-p2;
                                                console.log("per is = "+ result);
                                            }
                                            function sq(p1,p2){
                                                let result = p1-p2;
                                                console.log("sq is = "+ result);
                                            }
                                            calculator(100,200, "+")
                                            calculator(100,200, "-")
                                            calculator(190,200, "*")
                                            calculator(6778,200, "/")
                                            calculator(998,200, "%")
                                            calculator(100,800, "^")
                                            calculator(700,200, "$")