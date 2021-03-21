"use strict";

const digital = document.querySelector(".digital");

const btnAC = document.querySelector(".btn-AC");
const btnPlus = document.querySelector(".btn-Plus");
const btnMinus = document.querySelector(".btn-Minus");
const btnEquel = document.querySelector(".btn-Equel");
const btnMult = document.querySelector(".btn-Mult");
const btnDivide = document.querySelector(".btn-Divide");
const btnComa = document.querySelector(".btn-coma");
const btnPercent = document.querySelector(".btn-percent");

const btn0 = document.querySelector(".btn-0");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");


let operand1 = 0,
 operand2 = 0,
 result = 0,
 result1 = 0,
 result2 = 0,
 result3 = 0,
 Events = 'None';


  





btn1.addEventListener("click", () => {
    operand1 = digital.value*10+1;
    digital.value = operand1 ;
   
});

btn2.addEventListener("click", () => {
    operand1 = digital.value*10+2;
    digital.value = operand1 ;  
});

btn3.addEventListener("click", () => {
    operand1 = digital.value*10+3;
    digital.value = operand1 ;
});

btn4.addEventListener("click", () => {
    operand1 = digital.value*10+4;
    digital.value = operand1 ;
});

btn5.addEventListener("click", () => {
    operand1 = digital.value*10+5;
    digital.value = operand1 ;
});

btn6.addEventListener("click", () => {
    operand1 = digital.value*10+6;
    digital.value = operand1 ;
});

btn7.addEventListener("click", () => {
    operand1 = digital.value*10+7;
    digital.value = operand1 ;
});

btn8.addEventListener("click", () => {
    operand1 = digital.value*10+8;
    digital.value = operand1 ;
});

btn9.addEventListener("click", () => {
    operand1 = digital.value*10+9;
    digital.value = operand1 ;
});

btn0.addEventListener("click", () => {
    operand1 = digital.value*10+0;
    digital.value = operand1 ;
});


btnAC.addEventListener("click", () => {
    digital.value = "0" ;
});

btnPlus.addEventListener("click", () => {
    operand2 = Number(digital.value) ;
    Events = 'plus';
    digital.value ='0';
});

btnMinus.addEventListener("click", () => {
    operand2 = Number(digital.value) ;
    Events = 'minus';
    digital.value ='0';
});

btnMult.addEventListener("click", () => {
    operand2 = Number(digital.value) ;
    Events = 'mult';
    digital.value ='0';
});

btnDivide.addEventListener("click", () => {
    operand2 = Number(digital.value) ;
    Events = 'divide';
    digital.value ='0';
});

btnPercent.addEventListener("click", () => {
    operand2 = Number(digital.value) ;
    Events = 'percent';
    digital.value ='0';
});

btnEquel.addEventListener("click", () => {
    operand1 = Number(digital.value) ;
    


switch(Events)
{
    case 'plus':
        {
              result = operand1 + operand2;
              digital.value = result;
        }; 
        break;  
    
    
        case 'minus':
        {
               result = operand2 - operand1;   
               digital.value = result  ;
        };            
          break;          
    
    
          case 'mult':          
          {        
                result = operand1 * operand2;      
                digital.value = result;      
          };        
           break;       
                  
                  
           case 'divide':       
           {            
                  result = operand2 / operand1;       
                  digital.value = result;        
           };           
             break;         
                      
            default:          
                digital = '0';         
        }

    });