// // selects the #container div (don't worry about the syntax, we'll get there)
// const container = document.querySelector("#container");

// // selects the first child of #container => .display
// const display = container.firstElementChild;
// console.log(display);  // <div class="display"></div>

// // // selects the .controls div
// // const controls = document.querySelector(".controls");

// // // selects the prior sibling => .display
// // const display = controls.previousElementSibling;
// // console.log(display); // <div class="display"></div>

// // creates a new div referenced in the variable 'div'
// const div = document.createElement("div");

// // adds the indicated style rule to the element in the div variable
// div.style.color = "blue";

// // adds several style rules
// div.style.cssText = "color: blue; background: white;";

// // adds several style rules
// div.setAttribute("style", "color: blue; background: white;");
// // creates a text node containing "Hello World!" and inserts it in div
// div.textContent = "Hello World!";

// console.log(div)




// const button = document.querySelector("#add");
// const list = document.querySelector("#list");

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "New Item";
//   list.appendChild(li);
// });

const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const item = document.querySelector("#item");
const dlt = document.createElement("dlt")

btn.addEventListener("click", () => {


//   const myItem = item.value;
//   item.value = "";

    const li = document.createElement("li");
    const listBtn = document.createElement("button");

    li.textContent = item.value
    list.appendChild(li);
    li.appendChild(listBtn);

    listBtn.textContent = "Delete";
    list.appendChild(li);

    listBtn.addEventListener("click", () => {
    list.removeChild(li);
    
  });
    item.value = "";
    // item.focus();
});

