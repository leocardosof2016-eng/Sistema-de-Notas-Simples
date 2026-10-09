let contador = 0;
const divPai = document.getElementById("container-geral");


function criarNota() {    
    contador++

    const div = document.createElement("div");
    div.className = "nota-container";

    const titulo = document.createElement("span");
    titulo.innerHTML = "Nota " + String(contador);
    titulo.className = "lable";

    const btnRemover = document.createElement("button");
    btnRemover.className = "btn-remover-nota";
    btnRemover.getAttribute("data-position", contador);
    btnRemover.innerHTML = "&times;";

    const areaTexto = document.createElement("textarea");
    areaTexto.className = "text-area";

    divPai.appendChild(div);
    div.append(titulo, btnRemover, areaTexto);

};

//A ser adicionado: Função do contador