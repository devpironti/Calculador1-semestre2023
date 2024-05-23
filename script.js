function calcular(operacao){
    var cax1 = Number(document.getElementById('nmr1').value)
    var cax2 = Number(document.getElementById('nmr2').value)
    var operacao = document.querySelector('input[name="operacao"]:checked')
    var resposta 
    
        
     
    
        switch (operacao){
            case soma: 
                resposta = cax1+ cax2
                break 
            case sub:
                resposta = cax1 - cax2
                break
                case mult:
                resposta = cax1 * cax2
                break
            case divi:
                resposta= cax1 / cax2
                break
               
        }
        document.getElementById('vizuresul').value = `${resposta}`

}