var intodo = document.getElementById("intodo");
var addButton = document.getElementById("add");
var removeButton = document.getElementById("remove");
var outputDiv = document.getElementById("output");

function add() {
    var todoStr = intodo.value;
    outputDiv.innerHTML += `<li><input type="checkbox" id="todocheck">${todoStr}</li>`
    intodo.value="";
    intodo.focus();   
}

function remove() {
    let children = Array.from(outputDiv.children);

    children.forEach(child => {
        // console.log(child.tagName);
        // console.log(child.firstChild.id);
        let grandchild=child.firstChild;
        if(grandchild.id==='todocheck'){
            if(grandchild.checked){
                child.remove();
            }
        }
    });
}

addButton.addEventListener("click", function (event) {
    event.preventDefault();
    add();
});


removeButton.addEventListener("click", function (event) {
    event.preventDefault();
    remove();
});


outputDiv.addEventListener('click', function handleClick(event) {
    console.log('user clicked: ', event.target);
    event.target.classList.toggle('bg-done');
});
