window.onload = function () {
//evento para ocultar y añadir lista//
var showList = document.getElementById("addList");
  showList.addEventListener("click", addList);
var save = document.getElementById("save");
  save.addEventListener("click", newList);
};

function addList() {
  var buttonHidden = document.getElementById("addList");
  buttonHidden.style.display="none";
  var showForm = document.getElementById("newForm");
  showForm.style.display="inline-block";
};

function newList() {
  var textArea= document.getElementById("textArea").value;
  var container=document.createElement("div");
  container.setAttribute("id","container");
  var title=document.createElement("p");
  title.classList.add("tittle");
  var text= document.createTextNode(textArea);
  var form= document.getElementById("newForm")
  container.appendChild(title);
  title.appendChild(text);
  var trello=document.getElementsByClassName('trello')[0];
  trello.insertBefore(container,form);

  container.style.display="inline-block";
  var newClick = document.createElement("a");
  newClick.setAttribute("id","newClick");
  newClick.setAttribute("href","#")
  var tarea= document.createTextNode("añadir tarea");
  newClick.appendChild(tarea);
  container.appendChild(newClick);
  newClick.addEventListener("click",añadir);
  document.getElementById('container').classList.add("container");
  document.getElementById("textArea").value="";
};

function añadir() {
  var addArea=document.createElement("div");
  addArea.setAttribute("id","addTextArea");
  var input =document.createElement("input");
  input.setAttribute("id","textAñadir");
  var buttonAdd =document.createElement("input");
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

function añadirTarea() {
    var textArea= document.getElementById("textAñadir").value;
  var container=document.createElement("div");
    var title=document.createElement("p");
    title.classList.add("tareas");
  var text= document.createTextNode(textArea);
  container.appendChild(title);
  title.appendChild(text);
  var padre=document.getElementById("container");
  var referencia=document.getElementById('addTextArea');
  padre.insertBefore(container,referencia);
  document.getElementById("textAñadir").value="";
};
