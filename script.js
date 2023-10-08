//your JS code here. If required.
let a = document.createElement("h1");
let container = document.getElementById("sizeInfo");
container.appendChild(a);
function updateSize(){
    a.innerText="width: "+`${window.outerWidth}`+" and Height: "+`${window.outerWidth}`;
}
window.addEventListener('resize',updateSize);

