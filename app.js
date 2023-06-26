const addBtn = document.getElementById("add");

const listItem = document.querySelector(".lists");

const input = document.getElementById("input-value");

addBtn.addEventListener("click", () => {
  const inputData = input.value;

  if (inputData === "") {
    alert("Input can not be Empty");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputData;
    listItem.appendChild(li);

    const span = document.createElement("span");
    span.innerHTML= "\u00d7"
    li.appendChild(span)
  }
  input.value = ""
});


listItem.addEventListener('click',(e)=>{
    if(e.target.tagName== "LI") {
        e.target.classList.toggle('checked')
    }
    else if (e.target.tagName== "SPAN") {
        e.target.parentElement.remove()
    }
} )