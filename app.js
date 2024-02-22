


const pageTitle=document.title="DomProject"


const headerArea= document.querySelector(".header")

headerArea.style.backgroundColor="purple"
headerArea.style.padding="20px"

const titleText=document.getElementById("title")

titleText.textContent="Javascript Dom Assignment 1"
titleText.style.textAlign="center"
titleText.style.color="white"

const navBar=document.querySelector(".nav-item")

navBar.style.display="flex"
navBar.style.justifyContent="center"
navBar.style.alignItems="center"
navBar.style.listStyle="none"
navBar.style.gap="3rem"
navBar.style.color="white"
navBar.style.marginTop = "20px";
navBar.style.fontSize="25px"


const inputUsername=document.querySelector("#username")
inputUsername.disabled="true"
inputUsername.value="Nur"
inputUsername.style.padding="10px"
inputUsername.style.width="30%"
inputUsername.style.fontWeight = "bold"
inputUsername.style.borderRadius="5px"


const inputPassword=document.querySelector("#password")
inputPassword.type = "text";
inputPassword.disabled="true"
inputPassword.value="123456"
inputPassword.style.padding="10px"
inputPassword.style.width="30%"
inputPassword.style.fontWeight = "bold"


const btnLogin=document.querySelector(".btn")

btnLogin.textContent="Giriş Yap"

btnLogin.style.backgroundColor="Grey"
btnLogin.style.padding="10px"
btnLogin.style.color="white"
btnLogin.style.borderRadius="10px"
btnLogin.style.cursor = "pointer";
btnLogin.style.fontWeight = "bold"
inputPassword.style.borderRadius="5px"


const projectArea=document.getElementById("projects")


const firstChild=projectArea.firstElementChild

firstChild.textContent="Js Dom Projects"
firstChild.style.color="#565656"

firstChild.style.margin="5px"


const myProjects = ["Hello World!", "Guess Number", "Checkout Page", "Gelir-Gider Projesi", "Api Projects"];



const lastChild= projectArea.lastElementChild
// console.log(lastChild);

myProjects.forEach(project => {
    const list = document.createElement("li");
    list.textContent = project;
    lastChild.appendChild(list);
});

lastChild.style.padding="10px"

const list=document.querySelectorAll("ul li")


const addedLists = document.querySelectorAll("#projects li");


addedLists.forEach(list => {
    list.style.color = "green"; 
    list.style.fontWeight = "bold";
    list.style.padding="5px"
});











