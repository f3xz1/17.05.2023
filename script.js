// -
class Todoitem {
  text;
  done;

  remove() {}

  add(list) {
    const fs = require("fs");
    const jsonlist = JSON.stringify(list);

    fs.writeFile("data.json", jsonData, "utf8", function (err) {
      if (err) {
        console.error("Ошибка при записи в файл:", err);
        return;
      }
      console.log("Данные успешно записаны в файл data.json");
    });

    console.log("added to file");
  }

  getList() {}
}

// -
function loadall() {
  const fs = require("node:fs");
  fs.fs.readFile("data.json", "utf8", (err, data));
  if (err) {
    console.error("Ошибка при чтении файла:", err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.error("Ошибка при разборе JSON:", error);
  }
}

function AddToDoItem() {
  let todotext = textbox.value;
  console.log(todotext);

  if (textbox.value == "") {
    alert("input something in line");
    return;
  }

  let a = `<div class="ToDoItem"> 
  <input type="checkbox"/>
  <label for="">${todotext}</label> 
  <button class="ToDoRemoveBtn">
  <i class="fa-solid fa-trash" style="color: #ff0000;"></i>
  </button> 
  </div>`;

  let Todoitem = (TodoConteiner.innerHTML += a);
  textbox.value = "";
  console.log("item added");
}

var button = document.getElementById("AddItembtn");
var textbox = document.getElementById("ItemInput");
var TodoConteiner = document.getElementById("TodoConteiner");

// var todolist = loadall(); // -

button.addEventListener("click", AddToDoItem);

TodoConteiner.addEventListener("click", function (event) {
  if (event.target.matches("button.ToDoRemoveBtn")) {
    let div = event.target.closest("div");
    div.remove();
    console.log("item removed");
    /* 
    по какой-то причине при нажатии на иконку мусорки для удаления todoitem 
    кнопка запускаеться но не входя в этот if
    */
  }
  // if (event.target.matches("input.ToDoCheck")) {
  //   if (event.target.checked) {
  //     event.target.closest("label").value.style.textDecoration = "line-trough";
  //     console.log("1488");
  //   }
  // }
});

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    AddToDoItem();
  }
}

textbox.addEventListener("keydown", handleKeyPress);
