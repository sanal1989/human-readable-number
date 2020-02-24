module.exports = function toReadable (number) {
    if(number == 0){
        return "zero";
    }
    let result = "";
    if(number/100>0){
        let num = Math.trunc(number/100);
            if(num ==   1){
                result+="one";
            }else if(num == 2){
                result+="two";
            }
            else if( num == 3){
                result+="three";
            }
            else if( num == 4){
                result+="four";
            }
            else if( num == 5){
                result+="five";
            }else if( num == 6){
                result+="six";   
            }
            else if(num == 7){
                result+="seven";
            }
            else if(num == 8){
                result+="eight";
            }
            else if(num == 9){
                result+="nine";
            }
            if(number>99){
            	result+=" hundred";
            }
    }
    if(number>100){
        if(number%100!=0){
            result+=" ";
        }
    }
    if((number%100)>=10 && (number%100)<20){
        let num2 = Math.trunc((number%100));
        if(num2 == 11){
            result+="eleven";
        }
        else if( num2 == 10){
            result+="ten";
        }
        else if( num2 == 12){
            result+="twelve";
        }
        else if( num2 == 13){
            result+="thirteen";
        }
        else if( num2 == 14){
            result+="fourteen";
        }else if( num2 == 15){
            result+="fifteen";   
        }
        else if(num2 == 16){
            result+="sixteen";
        }
        else if(num2 == 17){
            result+="seventeen";
        }
        else if(num2 == 18){
            result+="eighteen";
        }
        else if(num2 == 19){
            result+="nineteen";
        }
        return result;
    }
    if((number%100)>19){
        let num3 = Math.trunc((number%100)/10);
        if(num3 == 2){
            result+="twenty";
        }
        else if( num3 == 3){
            result+="thirty";
        }
        else if( num3 == 4){
            result+="forty";
        }
        else if( num3 == 5){
            result+="fifty";
        }else if( num3 == 6){
            result+="sixty";   
        }
        else if(num3 == 7){
            result+="seventy";
        }
        else if(num3 == 8){
            result+="eighty";
        }
        else if(num3 == 9){
            result+="ninety";
        }
    }
    if(((number%100)>19)){
        if((number%100)%10!=0){
            result+=" ";
        }
        
    }
    if(number%10>0){
        let num4 = Math.trunc(number%10);
        if(num4 ==   1){
            result+="one";
        }else if(num4 == 2){
            result+="two";
        }
        else if( num4 == 3){
            result+="three";
        }
        else if( num4 == 4){
            result+="four";
        }
        else if( num4 == 5){
            result+="five";
        }else if( num4 == 6){
           result+="six";   
        }
        else if(num4 == 7){
            result+="seven";
        }
        else if(num4 == 8){
            result+="eight";
           }
        else if(num4 == 9){
            result+="nine";
        }
    }
    return result;

}
