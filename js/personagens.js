function mostrarficha(id){

let ficha = document.getElementById(id);

if(ficha.style.display === "block"){
ficha.style.display = "none";
}else{
ficha.style.display = "block";
}

}