```
function calculaPrecoTotal(quantidade) {
  if(quantidade < 12){
    custoTotal = quantidade * 1.30
    return custoTotal
  } else {
    custoTotal = quantidade * 1
    return custoTotal
  }
}

```