const formclosebutton = document.querySelector('.closebtn');
const subButton = document.querySelector('.formbtn');
const formDiv =  document.querySelector('.email-formwrap');
const notifyBtn = document.querySelector('.btnNotify');

const formclose = ()=>{
    formDiv.style.visibility = "hidden"
}


const formopen = ()=>{
    formDiv.style.visibility = "visible"
}


formclosebutton.addEventListener("click",formclose);
notifyBtn.addEventListener("click",formopen);