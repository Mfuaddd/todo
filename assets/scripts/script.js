const input = document.getElementById("inp")
const button = document.getElementById("btn")
const list = document.querySelector(".todoList")

loadLi()
button.addEventListener("click",function () {
    if (input.value !== ""){
        addLi(input.value)
        input.value = ""
        saveLi();
    }
})
function addLi(value,cls){
    const li = document.createElement("li");
    const sClose = document.createElement("span");
    sClose.textContent = "×";
    sClose.classList.add("sClose")
    li.textContent = value;
    console.log(cls)
    li.classList.add(cls)
    li.append(sClose)
    list.append(li)
    sClose.addEventListener("click",function () {
        li.remove()
        saveLi()
    })
    li.addEventListener("click",function () {
        li.classList.toggle("line")
    })
}
function loadLi() {
    const fullarray =  JSON.parse(localStorage.getItem("liArray"))
    for (let i = 0; i < fullarray.length; i++) {
        addLi(fullarray[i][0],fullarray[i][1][0])
        console.log(fullarray[i][0],fullarray[i][1][0]);
    } 
}
function saveLi() {
    // const lic = +localStorage.getItem("liCount")+1
    // localStorage.setItem("liCount",lic)
    // localStorage.setItem(+lic,[li.textContent,li.classList])
    const liArray = list.querySelectorAll("li")
    const p = list.querySelectorAll("p")
    const fullarray = []
    for (let i = 0; i < liArray.length; i++) {
        fullarray.push([liArray[i].textContent,liArray[i].classList])
    }
    localStorage.setItem("liArray",JSON.stringify(fullarray))
}

