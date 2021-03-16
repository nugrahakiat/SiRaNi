let list = [];
let btn = document.getElementById("btn");

btn.onclick = function(){
    let tb = document.getElementById("tb").value;
    //list.push(tb);
    document.getElementById("list").innerHTML += "<li>"+tb+"</li>"
}
random.onclick = function(){
let ul = document.querySelector('#list');
for (let i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

}   
