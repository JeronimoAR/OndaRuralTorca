var navBtns = document.querySelectorAll(".nav-btns div a");
var list = document.getElementById("nav-btns");
var listbtn = document.querySelector(".checkbtn");
var header = document.getElementById("header");

var size = window.innerWidth;
var flag = false;
window.addEventListener("resize", () => {
    list.style.left = "200%";
    size = window.innerWidth;
    flag = false;
    console.log(flag);
});

if (window.innerWidth < 490) {
    for (var i = 0; i < navBtns.length; i++) {
        navBtns[i].addEventListener("click", () => {
            list.style.left = size + "px";
            header.style.position = "absolute";
            flag = false;
            console.log(flag);
        });
    }
}

function buttons() {
    if (flag) {
        flag = false;
        list.style.left = size + "px";
        header.style.position = "absolute";
    } else {
        flag = true;
        list.style.left = size - 160 + "px";
        header.style.position = "fixed";
        document.addEventListener("mousemove", (e) => {
            if (e.clientX < (size - 160) || e.clientY > 348) {
                list.style.left = size + "px";
                header.style.position = "absolute";
                flag = false;
            }
        })
    }
}
