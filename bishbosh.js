var stopInput = document.getElementById("stop");
var bishInput = document.getElementById("bish");
var boshInput = document.getElementById("bosh");
var runButton = document.getElementById("run");
var outputDiv = document.getElementById("output");

function bishbosh() {
var start = 1;
var stop = stopInput.value;
var bosh = boshInput.value;
var bish = bishInput.value;

  for (let i = start; i <= stop; i++) {
    if (i % bosh === 0) {
    outputDiv.innerHTML+=`<p>* Bosh</p>`
      console.log("Bosh");
    } else if (i % bish == 0) {
    outputDiv.innerHTML+=`<p>* Bish</p>`
      console.log("Bish")
    } else {
    outputDiv.innerHTML+=`<p>* ${i}</p>`
      console.log(i % bosh);
    }

  }
}

runButton.addEventListener("click", function(event){
  event.preventDefault();
  bishbosh();
});