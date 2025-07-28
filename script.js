const menuIcon = document.querySelector("#menuIcon");
const sideBar = document.querySelector(".side-bar-list")
const removeSideBar = document.querySelector(".cross")

    menuIcon.addEventListener("click",()=>{
    console.log("hello")
    sideBar.style.display = "flex";
})

removeSideBar.addEventListener("click", ()=>{
    sideBar.style.display = "none";
})