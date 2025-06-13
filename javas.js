// alert("Hello world!");
// let js = "amazing";
// undefined
// if(ja === "amazing") alert("fun");
//alert ma fun
// js = "boring";
// if(js === "amazing") alert("fun");
//undefined
// 40+82+80-87
//115

'use strict';

function calcAge(birthYear){
    const age = 2037 - birthYear;

    function printAge(){
        const output = `${firstName}, you are ${age},born in ${birthYear}`; 
        
        if (birthYear >= 1981  && birthYear <= 1996) {
            var millenial = true;
            //creating new variable with  same name as outer scope's variable
            const firstName = 'Roshu';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log("🚀 ~ printAge ~ str:", str);
            
            function add(a,b){
                return a + b;
            }
            
            //Reassigning outer scope's variable
            output = 'NEW OUTPUT!';
        }
        console.log("🚀 ~ printAge ~ millenial:", millenial);
        console.log("🚀 ~ printAge ~ output:", output);
        // console.log("🚀 ~ add ~ add:", add(2,3));
    }
        printAge(); 

        return age;
    }
    
    const firstName = 'janu';
    calcAge(1991);