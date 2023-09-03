let content = document.querySelector("#content");

let info = document.getElementById("info");
let home = document.getElementById("home");
let dark = document.getElementById("dark");
let cool = document.getElementById("cool");

let darkCounter = 0;
let darkLimit = 4

let coolCounter = 0;
let coolLimit = 4;

function darkMode() {
    if(darkCounter == darkLimit) {
        info.textContent = "Jatah dark mode mu sudah habis LOL 🤣😂";
        dark.style.display = "none";
        home.textContent = "RESTART";
    } else {
        darkCounter += 1;
        if(darkCounter == 1 || darkCounter == 3) {
            content.classList.remove("cool");
            content.classList.add("dark");
            dark.textContent = "LIGHT";
            return
        } else if(coolCounter == 1 || coolCounter == 3) {
            content.classList.remove("cool");
            content.classList.remove("dark");
            dark.textContent = "DARK";
            cool.textContent = "COOL";
            coolCounter += 1;
            return
        } else {
            content.classList.remove("dark");
            dark.textContent = "DARK";
            return
        };
    };
}

function coolMode() {
    if(coolCounter == coolLimit) {
        info.textContent = "Jatah cool mode mu sudah habis LOL 🤣😂";
        cool.style.display = "none";
        home.textContent = "RESTART";
    } else {
        coolCounter += 1
        if(coolCounter == 1 || coolCounter == 3) {
            content.classList.add("cool");
            cool.textContent = "LIGHT";
            return
        } else if(darkCounter == 1 || darkCounter == 3) {
            content.classList.remove("cool");
            content.classList.remove("dark");
            dark.textContent = "DARK";
            cool.textContent = "COOL";
            darkCounter += 1;
            return
        } else {
            content.classList.remove("cool");
            cool.textContent = "COOL";
            return
        };
    }
}

function reRender() {
    location.reload();
}