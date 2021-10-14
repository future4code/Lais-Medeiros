```const tarefasConcluidas = tarefas.filter((tarefas, indice, array)=>{
          return tarefas.status === "done"
      })
      const tarefaNome = tarefasConcluidas.map((tarefasConcluidas, indice, array)=>{
          return tarefasConcluidas.titulo
      })
      return tarefaNome
 
 
}```