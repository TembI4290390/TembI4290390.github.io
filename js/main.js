
var gold = parseFloat(document.getElementById('gold').value);
 var balance=parseFloat(document.getElementById('balance').value);
var al2 = parseFloat(document.getElementById('alm2').value);
 
 var point=document.getElementById('point').value;
var point3=document.getElementById('point3').value;
 var point5=document.getElementById('point5').value;

function addition(){
    var balance_old=parseFloat(document.getElementById('balance').value)
    var balance_new= parseInt(document.getElementById('balance_new').value);
    var sum=balance_old+balance_new;
      if (isNaN(balance_old)==true) balance_old=0;
      if (isNaN(balance_new)==true) balance_new=0;
        document.getElementById('result_1').value=sum;
        document.getElementById('balance').value=sum;
        document.getElementById('balance_new').value='0';
      }


function addition2(){
     var balance_old=parseFloat(document.getElementById('balance').value)
      var d=parseInt(document.getElementById('d').value); 
     var al2=parseFloat(document.getElementById('alm2').value);
    var per=balance_old-d;
    var alm2=al2+d;
    
 if (d>x){
      alert('Пополните свой баланс');
      document.getElementById('d').value=0;
 }
 else{
      document.getElementById('result_2').value=per;
     document.getElementById('result_4').value=alm2;
        document.getElementById('alm2').value=alm2;
       document.getElementById('balance_old').value=per;
      document.getElementById('d').value=0;
 }
} 


function add(){
 var naim=parseInt(document.getElementById('alm2').value); 
// var point=parseInt(document.getElementById('point').value);
  var p=parseInt(document.getElementById('point').value);
 var point2=parseInt(document.getElementById('point2').value);
 var res=p+point2;
var point_res=point2*50;
if (point_res>naim){
     alert('Недостаточно золота');
   
}
else{
 document.getElementById('point').value=res;
document.getElementById('point2').value=0;
document.getElementById('alm2').value=naim-point_res;
 }}

function play(){
var style = document.getElementById('block').style;
var style1 = document.getElementById('block1').style;
var naim=parseInt(document.getElementById('alm2').value);

if (naim<=499){
alert('У Вас мало золота.Для входа необходимо минимум 500 золотых.');
}
else{
style.visibility = "collapse";
style1.visibility = "collapse";
}
}

 function add2(){
  var naim=parseInt(document.getElementById('alm2').value); 
 //var point3=parseInt(document.getElementById('point3').value);
 var p=parseInt(document.getElementById('point3').value);
 var point4=parseInt(document.getElementById('point4').value);
 var almaz=point3*4;
 var res2=p+point4;
 var point_res=point4*330;
 if (point_res>naim){
 alert('Недостаточно золота');
 
 }
 else{
 document.getElementById('point3').value=res2;
 document.getElementById('point4').value=0;
 document.getElementById('alm2').value=naim-point_res;
 }}



 function add3(){
 naim=parseInt(document.getElementById('alm2').value);
// var point5=parseInt(document.getElementById('point5').value);
 var p=parseInt(document.getElementById('point5').value); 
 var point6=parseInt(document.getElementById('point6').value);
 var res3=p+point6;
 var point_res=point6*950;
 if (point_res>naim){
 alert('Недостаточно золота');
 
 }
 else{
 document.getElementById('point5').value=res3;
 document.getElementById('point6').value=0;
 document.getElementById('alm2').value=naim-point_res;
 }}
     

function showHide (id){
  var style = document.getElementById(id).style
    if (style.visibility == "collapse")
        style.visibility = "visible";
else
style.visibility = "collapse";

   
} 
setInterval(function() {
 
var p=document.getElementById('point').value;
var p3=document.getElementById('point3').value;
var p5=document.getElementById('point5').value;
var ces=p*4+p3*23+p5*92;
document.getElementById('el').value=ces;

	document.getElementById('el').innertext=document.getElementById('el').value*1+document.getElementById('ces').value*1
document.getElementById('ces').value=document.getElementById('el').innertext;
	}, 300)