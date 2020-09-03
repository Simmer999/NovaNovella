// The following function exchanges the write and read containers.

function slideOutLeft() {
    var writeContainer = document.getElementById("main-book-container");
    writeContainer.classList.toggle("main-boo");
    var readContainer = document.getElementById("readBook");
    readContainer.classList.toggle("main-rea");
    var writeBtn = document.getElementById('writeBtn');
    writeBtn.classList.toggle('writeBtn-alt');
};
console.log('Got it.');
  

// The following function adds new text to the text already in the section.

function add_1a() {
  var newText = document.getElementById("input1").value;
  console.log(newText);
  var savedText = document.getElementById("textarea").value;
  console.log(savedText);
  var newSavedTExt =  savedText += newText;
  console.log(newSavedTExt);
  document.getElementById("textarea").value = newSavedTExt;
  console.log(document.getElementById("textarea").value);
};
// function add_1b() {
//   var x = document.getElementById("test").value;
//   console.log(x);
//   var y = document.getElementById("Mike").value;
//   console.log(y);
//   var z =  y += x;
//   console.log(z);
//   document.getElementById("Mike").value = z;
//   console.log(document.getElementById("Mike").value);
// };


// The following function pushes the text to localStorage.

let texts = [];
const addText = (ev) => {
    ev.preventDefault();
    let text = {
        id: Date.now(),
        name: document.getElementById("textarea").value
    }
  texts.push(text);
  document.querySelector("form").reset();
  // console.warn("added", {texts});
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
  var mike = document.getElementById("textarea").value;
  // console.log(mike);
  var susan = document.getElementById("textarea").value = mike + sartre[0].name;
  // console.log(susan);
}
getInfo()







