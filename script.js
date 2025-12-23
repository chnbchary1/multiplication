//multiplication using for loop
document.getElementById("btn").onclick = function(){
    let m = document.getElementById("mul").value;
    let out = ''
for(let i=1;i<=10;i++){
    let res = m*i;
     out += '<li>'+ m + ' X ' + i + '=' + res;'</li>'
   //console.log(m + " X " + i + ' = ' + res  )
   document.getElementById("op").innerHTML = out;
}


 }