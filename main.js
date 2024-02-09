// Pegamos o formulário e a div onde sai o resultado calculado
const form = document.querySelector('#formulario');
const resultado = document.querySelector('.resultado');

function resultadoFormulario(event) {

  
  event.preventDefault();
  
 
  const inputPeso = document.querySelector('#peso').value;
  const inputAltura = document.querySelector('#altura').value;


  const imcTotal = (inputPeso / (inputAltura * inputAltura)).toFixed(2);
  
  
   if (imcTotal <= 16.9){
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - extremamente magro.  </p>`
  }
   else if (imcTotal >= 17 && imcTotal <= 18.4) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - abaixo do peso".  </p>`
  }
   else if (imcTotal >= 18.5 && imcTotal <= 24.9) {
    resultado.innerHTML = `<p> Seu IMC é de: ${imcTotal} </strong> - peso normal .  </p>`
  }
   else if (imcTotal >= 25 && imcTotal <= 29.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - acima do peso.  </p>`
  } 
   else if (imcTotal >= 30 && imcTotal <= 34.9) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Sua classificação é Obesidade grau 1 </p>`
  }
  else if (imcTotal >= 35 && imcTotal <= 39.9){
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Sua classificação é Obesidade grau 2 </p>`
  }
  else if (imcTotal >= 40){
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Sua classificação é Obesidade grau 3 </p>`
  }
   else {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> 0 </strong> - Algo de errado não está certo</p>`
  }
} 

form.addEventListener('submit', resultadoFormulario)
