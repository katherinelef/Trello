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
  var title=document.createElement("p");
  var text= document.createTextNode(textArea);
  var form= document.getElementById("newForm")
  container.appendChild(title);
  title.appendChild(text);
  document.body.insertBefore(container,form);

  container.style.display="inline-block";
  var newClick = document.createElement("a");
  var tarea= document.createTextNode("añadir tarea");
  newClick.appendChild(tarea);
  container.appendChild(newClick);
  newClick.setAttribute("onclick","añadir()")
};


function añadir() {
  alert("hola")

};
