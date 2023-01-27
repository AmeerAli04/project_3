document.write("-------------Advace JavaScript------------"+"</br>");
/*
--------------------Topics of Advace Java-----------------
1.Diferrence b/w var, let and const variables.
2.Template String or Template Literals.
3.Arrow Function
4.
*/
/*
//-------Template String----------
let firstName="Ameer";
let lastName="Ali";
let age=19;
let city="Larkana"
let province="Sindh";
let countory="Pakistan";
function info(firstName, lastName, age, city, province, countory){
	return ` firstName: ${firstName}
lastName: ${lastName} 
age: ${age}
city: ${city}
province: ${province}
countory: '${countory}'`;

}
let emp1=` hello....
${info(firstName, lastName, age, city, province, countory)}
congratulations...!
You have qualified Screening test.
Please go for Written test in 
Block No:2 `;
// ---above backtake notations shows the Template String---
console.log(emp1);
*/
// ---------Arrow Function---------------
function fun1(){
	document.write("fun1"+"<br>");
}
fun1();
let fun2=function(){
	return "fun2";
}
fun2();
// shotest form of both funtion is Arrow Function NOTE:-->All works same
let fun3=()=>{document.write("fun3"+"<br>");
document.write("All Three Functions will done same work"+"<br>");
}
fun3(); 
// if we make return only one single line then we don't need to use brackets{} 
let fun4=(name, number)=>`${name}-${number}`;
document.write(fun4("Funtion",4));
