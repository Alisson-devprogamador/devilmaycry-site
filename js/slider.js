const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot'); 
const totalnumber = document.querySelector('.numbers');

let active = 0;
const totalItems = items.length;
  
let timer;

function update(direction){

    items[active].classList.remove('active');
    dots[active].classList.remove('active');

    active = active + direction;

    if(active < 0){
        active = totalItems - 1; // Volta para o último item se for menor que 0
    }

    if(active >= totalItems){  // Volta para o primeiro item se for maior ou igual ao total de itens
        active = 0;
    }

    items[active].classList.add('active'); // Adiciona a classe 'active' ao item atual
    dots[active].classList.add('active'); // Adiciona a classe 'active' ao ponto indicador atual

    totalnumber.innerHTML = String(active + 1).padStart(2, '0'); // Atualiza o número total, adicionando um zero à esquerda se necessário
} 
 
 
clearInterval(timer) 
timer = setInterval(() => {update(1)}, 8000); // Atualiza automaticamente a cada 8 segundos

prevButton.addEventListener('click', () => update(-1));
nextButton.addEventListener('click', () => update(1));  

function mostrarficha(id){ 
    let ficha = document.getElementById(id); 
     
   if(ficha.style.display === "none"){ 
   ficha.style.display = "block"; 
   }else{
     ficha.style.display = "none"
   }
 
}