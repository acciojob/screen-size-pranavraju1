//your JS code here. If required.
let a = document.getElementsByTagName("h1");
console.log(a[0]);
function updateSize(){
    a[0].innerText="width: "+`${window.outerWidth}`+" and Height: "+`${window.outerWidth}`;
}
window.addEventListener('resize',updateSize);


