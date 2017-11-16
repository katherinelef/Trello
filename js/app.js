window.onload = function () {
//evento para ocultar y añadir lista//
var newList = document.getElementById("addList");
  newList.addEventListener("click", addList);
};

function addList() {
  var showList = document.getElementById("addList");
  showList.style.display="none";
      var container = document.createElement("form");
      var input= document.createElement("input");
      var button= document.createElement("input");
      button.setAttribute("type","button");
      button.setAttribute("value","Guardar");
      button.style.display="block"
        container.appendChild(input);
        container.appendChild(button);
var body = document.body;
var script = body.getElementsByTagName('script')[0];
body.insertBefore(container,script);
};
