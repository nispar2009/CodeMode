let sidebarVisible = false

loadFiles = () => {
    setValue("files", "<tr><th>Filename</th><th colspan='2'>Actions</th></tr>")
    for (const iterator of Object.keys(localStorage)) {
        document.getElementById("files").innerHTML += `<tr><td>${iterator}</td><td><button class="btn btn-success" onclick="openFile('${iterator}')">Open</button></td><td><button class="btn btn-danger" onclick="delFile('${iterator}')">Delete</button></td>`
    }
}

toggleSidebar = () => {
    if (sidebarVisible == false) {
        document.getElementById("sidebar").style.width = "100%"
        sidebarVisible = true
    } else {
        document.getElementById("sidebar").style.width = "0"
        sidebarVisible = false
    }
}

openFile = (file) => {
    document.getElementById("filename").value = (file.substring(0, file.length - 5))
    setValue("code", localStorage.getItem(file))
    toggleSidebar()
}

delFile = (file) => {
    if ((confirm(`Are you sure you want to delete ${file}?`))) {
        localStorage.removeItem(file)
    }
    loadFiles()
}

update = () => {
    localStorage.setItem(`${(getInput("filename"))}.html`, (getInput("code")))
    loadFiles()
    toggleSidebar()
}

run = () => {
    file = prompt("Which file would you like to run?")
    code = localStorage.getItem(file)
    document.querySelector("*").innerHTML = code
}

esc = () => {
    if (event.keyCode == 27) {
        document.getElementById("page").style.display = "none"
        setValue("page", "")
        console.log(hi)
    }
}