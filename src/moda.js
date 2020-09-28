const acharMaior = (contador) => Math.max.apply(null, contador);
const ordenarMenorParaMaior = (a, b) => a - b;
const mapearOcorencias = (name) => {
  return { contador: 1, name: name };
};
const contarOcorrencia = (a, b) => {
  a[b.name] = (a[b.name] || 0) + b.contador;
  return a;
};
const mapearParaArray = (contagem) => {
  const contador = [];
  Object.keys(contagem).filter((a) => {
    contador.push(contagem[a]);
  });
  return contador;
};
const filtrarModa = (contagem, MAX) =>
  Object.keys(contagem).filter((a) => {
    return contagem[a] === MAX && contagem[a] > 1 ? contagem[a] : null;
  });

function moda(arr) {
  const contagem = arr
    .sort(ordenarMenorParaMaior)
    .map(mapearOcorencias)
    .reduce(contarOcorrencia, {});
  const filtrada = filtrarModa(contagem, acharMaior(mapearParaArray(contagem)));
  return filtrada.length ? filtrada : 0;
}
module.exports = moda;
