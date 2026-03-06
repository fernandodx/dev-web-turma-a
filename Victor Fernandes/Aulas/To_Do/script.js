window.onload = function () {

    const input = this.document.getElementById ("tarefaInput");
    const btnAdicionar = this.document.getElementById("btnAdicionar");
    const lista = this.document.getElementById ("listaTarefas");

    btnAdicionar.addEventListener("click", () => {
    //Recupera o valor do campo input text
    const texto = input.value.trim ();

    //Criar um elemento da minha lista de tarefas
    const li = this.document.createElement ("li");
    
    //Adicionar o valor do input no meu item da lista
    li.textContent = texto;

    //Adicionando o click para riscar a tarefa
    li.addEventListener("click", () => {
        li.classList.toggle("concluida");
    })

    //Criação do botão de remover
    const btnRemover = this.document.createElement ("button");
    btnRemover.textContent = "x";
    btnRemover.classList.add ("fechar");
    //remover a classe de estilo do botão fechar
    btnRemover.addEventListener ("click", () => {
        li.remove ();
      });

      li.appendChild(btnRemover);

    //adiciona o item na lista para ser apresentado
    lista.appendChild(li);

    //Limpa o valor após a adição
    input.value = "";

    
    });
}

