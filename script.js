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

document.getElementById('downloadBtn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'assets/Arfat-CV.pdf';
  link.download = 'Arfat-Ansari-CV.pdf';
  link.click();
});