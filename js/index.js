// nav_tiao运动///////////////////////////////////////////
function tiaoYD() {
    var tiao = document.getElementsByClassName("nav_tiao")[0];
    var lis = document.querySelectorAll(".nav_center ul li");

    for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            let x = lis[i].getAttribute("tt");
            tiao.style.left = "0px"
            tiao.style.left = x * 132 + "px";
        }
        lis[i].onmouseout = function () {
            tiao.style.left = "0px"
        }

    }
}
tiaoYD();


//面向对象轮播///////////////////////////////////////////
function lbt(imgs, btns, lis, j, carousel) {
    this.imgs = imgs;
    this.btns = btns;
    this.lis = lis;
    this.j = j;
    this.carousel = carousel;
}
lbt.prototype.init = function () {
    this.dianji();
    this.dsq(1);
}
lbt.prototype.dianji = function () {
    var me = this;
    for (var i in this.btns) {
        this.btns[i].onclick = function () {
            if (this.className == "you") {
                me.dong(1);
            } else {
                me.dong(-1);
            }
        }

    }
    for (var i in lis) {
        var me = this;
        this.lis[i].onclick = function () {
            for (var i in lis) {
                me.lis[i].className = "";
                me.imgs[i].className = "";
            }
            this.className = "active";
            var x = parseInt(this.getAttribute("tl"));
            me.imgs[x].className = "active";
        }
    }
    this.carousel.onmouseover = function () {
        me.dsq(0);
    }
    this.carousel.onmouseout = function () {
        me.dsq(1);
    }

}
lbt.prototype.dong = function (num) {
    this.j += num;
    if (this.j == 3) {
        this.j = 0;
    } else if (this.j == -1) {
        this.j = 2;
    }
    for (var i = 0; i < this.lis.length; i++) {
        this.lis[i].className = "";
        this.imgs[i].className = "";
    }
    this.imgs[this.j].className = "active";
    this.lis[this.j].className = "active";
}
lbt.prototype.dsq = function (num) {
    var me = this;
    if (num == 1) {
        this.timer = setInterval(function () {
            me.dong(1);
        }, 3000);
    } else {
        clearInterval(this.timer);
    }
}





//1
var imgs = carousel1.getElementsByTagName("img");
var btns = carousel1.getElementsByTagName("button");
var lis = carousel1.getElementsByTagName("li");
var carousel = document.getElementsByClassName("carousel")[0];

var car1 = new lbt(imgs, btns, lis, 0, carousel);

window.onload = function () {
    car1.init();
}

///拍摄地///////////////////////////////////////////////////////
var dis = document.getElementsByClassName("di_01");
console.log(dis);
for (let i = 0; i < dis.length; i++) {
    dis[i].onmouseover = function () {
        if (i % 2 == 0) {
            console.log(dis[i].children[1])
            dis[i].children[0].style.position = "relative";
            dis[i].children[0].style.top = "200px";
            dis[i].children[1].style.opacity = ".3";
            dis[i].style.background = "#b4b4b4";
        } else {
            console.log(dis[i].children[1])
            dis[i].children[1].style.position = "relative";
            dis[i].children[1].style.top = "-200px";
            dis[i].children[0].style.opacity = ".3";
            dis[i].style.background = "#b4b4b4";
        }

    }
    dis[i].onmouseout = function () {
        dis[i].children[0].style.position = "";
        dis[i].children[0].style.top = "";
        dis[i].children[1].style.position = "";
        dis[i].children[1].style.top = "";
        dis[i].children[1].style.opacity = "1";
        dis[i].style.background = "";
    }
}









