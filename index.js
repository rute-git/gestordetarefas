//pega os elemetos com o ID
const addButton=document.getElementById("add")
const minhasTarefas=document.getElementById("minhasTarefas")
const listInput=document.getElementById("u")

//pega o texto irmao ao botao
function removeElement(event){
    const taskToDelete=event.target.previousSibling.innerText
//imprime ... e o elemento/texto anterior ao botao
    console.log("a remover o elemento", event.target.previousSibling.innerText)

 //filtra um array com base numa condicao,Json.parse traasforma string e aramazena numarray
    let tarefasSalvas=JSON.parse(localStorage.getItem("tarefas")) || [];


//criou uma nova variavel e filtra ou mantem as tarefas disferentes da que foi clicada ou removida
const tarefasRestantes=tarefasSalvas.filter((task)=>task!==taskToDelete)
 localStorage.setItem("tarefas" , JSON.stringify(tarefasRestantes))
 document.location.reload()
   
}