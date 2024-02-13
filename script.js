var navBtns = document.querySelectorAll(".nav-btns div a");
var list = document.getElementById("nav-btns");
var listbtn = document.querySelector(".checkbtn");

var size = window.innerWidth;
var flag = false;
window.addEventListener("resize", () => {
    list.style.left = "200%";
    size = window.innerWidth;
    flag = false;
});

if (window.innerWidth < 490) {
    for (var i = 0; i < navBtns.length; i++) {
        navBtns[i].addEventListener("click", () => {
            list.style.left = size + "px";
            flag = false;
        });
    }
}

function buttons() {
    if (flag) {
        flag = false;
        list.style.left = size + "px";
    } else {
        flag = true;
        list.style.left = size - 160 + "px";
        document.addEventListener("mousemove", (e) => {
            if (e.clientX < (size - 160) || e.clientY > 348) {
                list.style.left = size + "px";
                flag = false;
            }
        })
    }
}
