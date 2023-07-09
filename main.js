var menu = document.getElementById("menu");
        var nav = document.querySelector(".nav");
        var li = document.querySelectorAll(".nav ul li a");

        nav.style.right = "-100%";

        li.forEach((link)=>{
            link.onclick = (e)=> {
                nav.style.right = "-100%";
                menu.src = "img/icons8-menu-30.png";
            }
        })

        menu.onclick = function () {
            if (nav.style.right == "-100%") {
                nav.style.right = "0%";
                menu.src = "img/icons8-cancel-64.png";
            }
            else {
                nav.style.right = "-100%";
                menu.src = "img/icons8-menu-30.png";
            }
        }