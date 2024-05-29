let id = document.querySelector("#div3");
console.log(id);

// let paraId = id.querySelector("#para1");
// console.log(paraId);

// id.appendChild(paraId.innerHTML = `okay`);

let para = document.createElement("p");
let text = document.createTextNode("okay paragraph");

para.appendChild(text);

id.appendChild(para);