let getcolor = ()=> {
  
    let randomNumber = Math.floor(Math.random() * 1677215);   // 1677215 stands for convert random number into hexacode form
    let randomCode = "#"+ randomNumber.toString(16);      //16 stands for hexadesimal
    document.body.style.backgroundColor = randomCode;
document.getElementById("color").innerText = randomCode
}
document.getElementById("btn").addEventListener(
    "click", 
    getcolor
)

getcolor();