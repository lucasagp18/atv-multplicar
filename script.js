function somar(){
  const n1 = Number(document.getElementById('n1').value);
  const n2 = Number(document.getElementById('n2').value);
  const n3 = Number(document.getElementById('n3').value);
  const p = document.getElementById('p');

  p.innerHTML = `O resultado e: ${n1 * n2 * n3}`;
}

const button = document.getElementById('button');

button.addEventListener("click",somar)