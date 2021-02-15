const head = document.getElementById('heading');

const testbutton = document.getElementById('test');

console.log(testbutton);
console.log(head);

// const testbutton = document.querySelector("#test-button")

// testbutton.addEventListener("click", () =>{
//   console.log("testbutton")
//   alert("The Test Button works!")} );

testbutton.onclick = function() {
  alert("The Test Button works!");
};
