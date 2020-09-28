function media(nota1, nota2) {
  const media = (nota1 + nota2) / 2;

  if (media >= 7) 
  return (`Media maior que 7,= ${media}`);
  else 
  return (`Media menor que 7,= ${media}`);
};

module.exports = media;
