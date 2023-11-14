var d = new Date("2020-04-13T00:00:00.000+08:00");
  d.toLocaleString('en-US', { timeZone: 'Europe/Helsinki' })
console.log(d);

const klucis = document.getElementById("klucis");
klucis.style = `
background-color:grey;
width:600px;
height:400px;
position: absolute;left: 50%;
top: 50%;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
`;
klucis.innerHTML=`
<h1>Krievu valodas stundu skaits:<h1><br>
<h1>${d}</h1>
`;