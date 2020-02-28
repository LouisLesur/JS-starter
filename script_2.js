function fact(nbr){
  var i, nbr, f = 1;
  for(i = 1; i <= nbr; i++)
  {
    f = f * i;   // ou f *= i;
  }
  return f;
}

number = prompt("Quel sera ta factoriel ?")

console.log(fact(number));
