let contador = 0;
const divPai = document.getElementById("container-geral");


function criarNota() {    
    contador++

    const div = document.createElement("div");
    div.className = "nota-container";
    div.id = "nota" + String(contador);

    const titulo = document.createElement("span");
    titulo.innerHTML = "Nota " + String(contador);
    titulo.className = "lable";

    const btnRemover = document.createElement("button");
    btnRemover.className = "btn-remover-nota";
    btnRemover.setAttribute("data-position", contador);
    btnRemover.innerHTML = "&times;";
    btnRemover.addEventListener("click", deletarNota);  //Adiciona um escutador de evento diretamente no elemento

    const areaTexto = document.createElement("textarea");
    areaTexto.className = "text-area";
    areaTexto.setAttribute("name", "texto-usuario")

    divPai.appendChild(div);
    div.append(titulo, btnRemover, areaTexto);
};


function deletarNota() {

	const index = this.getAttribute("data-position");
	const divDeletada = document.getElementById("nota" + Number(index));
	divPai.removeChild(divDeletada);                            //Função para retirar a div selecionada da divPai
	
    for(let i = Number(index) + 1; i <= contador; i++){
        const divAtual = document.getElementById("nota" + i);
        divAtual.id = "nota" + String(i-1);

        let tituloAtual = divAtual.getElementsByTagName("span")[0]  //Pega o primeiro span contido na divAtual
        tituloAtual.innerHTML = "Nota " + String(i-1);
        divAtual.getElementsByTagName("button")[0].setAttribute("data-position", Number(i-1));  //Mesma coisa das duas linhas de cima, porém mais concatenado
    };      

    contador--
};
