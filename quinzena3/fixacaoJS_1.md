```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    valorCarro = valorTotalVendas / qtdeCarrosVendidos
    comissaoTotal = (qtdeCarrosVendidos * 100) + ((valorCarro * 0.05) * qtdeCarrosVendidos) 
    if(qtdeCarrosVendidos === 0){
        salarioFinal = 2000
        return salarioFinal
    } else {
        salarioFinal = comissaoTotal + 2000
        return salarioFinal
    }
 
}
```