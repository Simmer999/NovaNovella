// the following function exchanges the write and read containers.

function slideOutLeft() {
    var writeContainer = document.getElementById("main-book-container");
    writeContainer.classList.toggle("main-boo");
    var readContainer = document.getElementById("readBook");
    readContainer.classList.toggle("main-rea");
};

  

// The following function adds new text to the text already in the section.

function add_1a() {
  var x = document.getElementById("test").value;
  console.log(x);
  var y = document.getElementById("Mike").value;
  console.log(y);
  var z =  y += x;
  console.log(z);
  document.getElementById("Mike").value = z;
  console.log(document.getElementById("Mike").value);
};
function add_1b() {
  var x = document.getElementById("test").value;
  console.log(x);
  var y = document.getElementById("Mike").value;
  console.log(y);
  var z =  y += x;
  console.log(z);
  document.getElementById("Mike").value = z;
  console.log(document.getElementById("Mike").value);
};


// The following function pushes the text to localStorage.

let texts = [];
const addText = (ev) => {
    ev.preventDefault();
    let text = {
        id: Date.now(),
        name: document.getElementById("Mike").value
    }
  texts.push(text);
  document.querySelector("form").reset();
  console.warn("added", {texts});
  let pre = document.querySelector("#msg pre");
  pre.textContent = "\n" + JSON.stringify(texts, "\t", 2);

  localStorage.setItem("myTextList", JSON.stringify(texts));
}

document.addEventListener("DOMContentLoaded", ()=> {
  document.getElementById("btn").addEventListener("click", addText)
});



// The following function combines what is in "Mike" with what is in localStorage.

function getInfo() {
  var heidegger = localStorage.getItem("myTextList");
  // console.log(heidegger);
  var sartre = JSON.parse(heidegger);
  // console.log(sartre[0].name);
  var mike = document.getElementById("Mike").value;
  // console.log(mike);
  var susan = document.getElementById("Mike").value = mike + sartre[0].name;
  // console.log(susan);
}
getInfo()







