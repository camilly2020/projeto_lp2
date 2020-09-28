function media(nota1, nota2) {
  const media = (nota1 + nota2) / 2;

  if (media >= 7) 
  return (`Media maior que 7. Resultado da Media, ${media}`);
  else 
  return (`Media menor que 7. Resultado da Media, ${media}`);
};

module.exports = media;
