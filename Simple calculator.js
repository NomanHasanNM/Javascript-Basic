var num1 = prompt("Enter your first number :");
var num2 = prompt("Enter you second number :- ");
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var sum,sub,mul,div,per;
sum = num1 + num2;
document.write(num1  + " + " + num2 +  " = " + sum + "<br/>");

sub = num1 - num2;
document.write(num1  + " - " + num2 +  " = " +sub + "<br/>");

mul = num1 * num2;
document.write(num1  + " * " + num2 +  " = " +mul + "<br/>");

div = num1 / num2;
document.write(num1  + " / " + num2 +  " = " +div +"<br/>");

per = num1 % num2;
document.write(num1  + " % " + num2 +  " = " + per +"<br/>");
 