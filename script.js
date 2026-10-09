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
    btnRemover.setAttribute("onclick", "deletarNota()")

    const areaTexto = document.createElement("textarea");
    areaTexto.className = "text-area";
    areaTexto.setAttribute("name", "texto-usuario")

    divPai.appendChild(div);
    div.append(titulo, btnRemover, areaTexto);
};

/*
function deletarNota() {
    //const btnRemoverNota = document.querySelectorAll(".btn-remover-nota");


	const index = this.getAttribute("data-position");
	//const pegarDivID = document.getElementById("nota" + Number(index));
	console.log("index: " + index);
	console.log("contador: " + contador)
	//divPai.removeChild(pegarDivID);     //Função para retirar a div selecionada da divPai
	
	contador--
        
    
};

*/



//A ser adicionado: Função do contador
//1. pegar o id da respectiva div ao clicar no botão
//2. remover essa div da árvore dom
//3. reorganizar as outras div's, seus títulos e id's
