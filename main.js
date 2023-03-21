const form = document.getElementById("form-questions")
const totalNomes = []
const totalTelefones = []
let linhas = ''
form.addEventListener("submit",function(a){
    const nomeContato = document.getElementById("nome")
    const numeroTelefone = document.getElementById("telefone")

    a.preventDefault()
    if(verificandoCampo()){
        alert("algum ou todos os campos estão vazios")
    }else{
        adicionarLinha()
        nomeContato.value = ''
        numeroTelefone.value= ''
    }
    
})

function adicionarLinha(){
    const nomeContato = document.getElementById("nome")
    const numeroTelefone = document.getElementById("telefone")
    const corpoFormulario = document.querySelector("tbody")
    if(totalNomes.includes(nomeContato.value) || totalTelefones.includes(numeroTelefone.value)){
        alert(`contato "${nomeContato.value}" ja existente:`)
    }else{
        linha= '<tr>'
    linha+=`<td> ${nomeContato.value}  </td>`
    //puxando nome para array
    totalNomes.push(nomeContato.value)
    linha+=`<td>${numeroTelefone.value}</td>`
    //puxando telefone para array
    totalNomes.push(numeroTelefone.value)
    linha+='</tr>'

    linhas += linha 

    corpoFormulario.innerHTML = linhas
    }    

}
function verificandoCampo(){
    const nomeContato = document.getElementById("nome")
    const numeroTelefone = document.getElementById("telefone")
    let verificar = false
    if(nomeContato.value === '' || numeroTelefone.vlue ===''){
        verificar = true 
        return verificar 
    }
} 
