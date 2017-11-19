window.onload = function () {
//evento para ocultar boton y añadir lista//
var hiddenButton = document.getElementById("addList");
  hiddenButton.addEventListener("click", addList);
//evento para guardar nombre de listas//
var save = document.getElementById("save");
  save.addEventListener("click", newList);
};

//funcion addList que se ejecuta con click//
function addList() {
  var hiddenButton = document.getElementById("addList");
    hiddenButton.style.display="none";
  var showForm = document.getElementById("newForm");
    showForm.style.display="inline-block";
};

//funcion newList que se ejecuta con click//
function newList() {
  //creando elementos//
  var textArea= document.getElementById("textArea").value;
  var container=document.createElement("div");
    container.setAttribute("id","container");
    container.style.display="inline-block";
  var title=document.createElement("p");
    title.classList.add("tittle");
  var text= document.createTextNode(textArea);
  var form= document.getElementById("newForm")
    //añadiendo elementos hijos//
    container.appendChild(title);
    title.appendChild(text);
  var trello=document.getElementsByClassName('trello')[0];
    trello.insertBefore(container,form);
  //creando elementos//
  var newClick = document.createElement("a");
    newClick.setAttribute("id","newClick");
    newClick.setAttribute("href","#")
  var tarea= document.createTextNode("añadir tarea");
  //añadiendo elementos hijos//
    newClick.appendChild(tarea);
    container.appendChild(newClick);
  //añadiendo evento click a ejecutarse con la funcion añadir//
  newClick.addEventListener("click",añadir);
  document.getElementById('container').classList.add("container");
  document.getElementById("textArea").value="";
};

//funcion añadir que se ejecuta con click//
function añadir() {
  //creando elementos//
  var addArea=document.createElement("div");
    addArea.setAttribute("id","addTextArea");
  var input =document.createElement("input");
    input.setAttribute("id","textAñadir");
  var buttonAdd =document.createElement("input");
    //añadiendo elementos hijos//
    addArea.appendChild(input);
    addArea.appendChild(buttonAdd);
    buttonAdd.setAttribute("type","button");
    buttonAdd.setAttribute("value","Añadir");
    buttonAdd.classList.add("button");
    buttonAdd.style.display="block";
    buttonAdd.addEventListener("click", añadirTarea);
  var padre=document.getElementById('container')
  var replace=document.getElementById('newClick')
    padre.replaceChild(addArea,replace);
  };

//funcion añadirTarea que se ejecuta con click//
function añadirTarea() {
  var textArea= document.getElementById("textAñadir").value;
  //creando elementos//
  var container=document.createElement("div");
  var title=document.createElement("p");
    title.classList.add("tareas");
  var text= document.createTextNode(textArea);
    //añadiendo elementos hijos//
    container.appendChild(title);
    title.appendChild(text);
  var padre=document.getElementById("container");
  var referencia=document.getElementById('addTextArea');
    padre.insertBefore(container,referencia);
    document.getElementById("textAñadir").value="";
};
