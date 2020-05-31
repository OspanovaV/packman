//при нажатии на клавиши игроке двигается
document.onkeypress = function (event) {

    var box = document.getElementsByClassName("brick");
//если нажата клавиша D
    if (event.keyCode == 100) {
//        игрок двигается влево на 4 пикселя
        packman.style.left = packman.offsetLeft + 4 + "px";
//        проверяется на касание игрока к стене
        for ( i = 0; i < box.length; i++) {
            console.log(i);
//            помещаем все стены в масив
            var box2 = box[i];
//            если игрок касается стены дальше не может двигатся
            if (packman.offsetLeft <= box2.offsetLeft + box2.offsetWidth && packman.offsetLeft + packman.offsetWidth >= box2.offsetLeft && packman.offsetTop + packman.offsetHeight >= box2.offsetTop && packman.offsetTop <= box2.offsetTop + box2.offsetHeight) {
                packman.style.left = packman.offsetLeft - 4 + "px";
            }
        }
    }
//    клавиша w
    if (event.keyCode == 115) {
        packman.style.top = packman.offsetTop + 4 + "px";
        for (i = 0; i < box.length; i++) {
            var box2 = box[i];
            if (packman.offsetLeft <= box2.offsetLeft + box2.offsetWidth && packman.offsetLeft + packman.offsetWidth >= box2.offsetLeft && packman.offsetTop + packman.offsetHeight >= box2.offsetTop && packman.offsetTop <= box2.offsetTop + box2.offsetHeight) {
                packman.style.top = packman.offsetTop - 4 + "px";
            }
        }
    }
    //    клавиша a
    if (event.keyCode == 97) {
        packman.style.left = packman.offsetLeft - 4 + "px";
        for (i = 0; i < box.length; i++) {
            var box2 = box[i];
            if (packman.offsetLeft <= box2.offsetLeft + box2.offsetWidth && packman.offsetLeft + packman.offsetWidth >= box2.offsetLeft && packman.offsetTop + packman.offsetHeight >= box2.offsetTop && packman.offsetTop <= box2.offsetTop + box2.offsetHeight) {
                packman.style.left = packman.offsetLeft + 4 + "px";
            }
        }
    }
    //    клавиша s
    if (event.keyCode == 119) {
        packman.style.top = packman.offsetTop - 4 + "px";
        for (i = 0; i < box.length; i++) {
            var box2 = box[i];
            if (packman.offsetLeft <= box2.offsetLeft + box2.offsetWidth && packman.offsetLeft + packman.offsetWidth >= box2.offsetLeft && packman.offsetTop + packman.offsetHeight >= box2.offsetTop && packman.offsetTop <= box2.offsetTop + box2.offsetHeight) {
                packman.style.top = packman.offsetTop + 4 + "px";
            }
        }
    }
}

window.onload = function() {
    var enemy1 = document.getElementById("enemy1");
    var box2 = document.getElementById("enemy2");
//    var box2 = document.getElementById("box2");
var box = document.getElementsByClassName("brick");
//    function rect2Rect(obj1, obj2) {
//
//       return ( obj1.offsetLeft <= obj2.offsetLeft + obj2.offsetWidth && obj1.offsetLeft + obj1.offsetWidth  >=  obj2.offsetLeft && obj1.offsetTop + obj1.offsetHeight >=  obj2.offsetTop && obj1.offsetTop <= obj2.offsetTop +  obj2.offsetHeight );
//    }

    function move() {

//       if(!rect2Rect(box1)) {
         setTimeout(function() {
           enemy1.style.left = enemy1.offsetLeft + 3 + "px";
//             box2.style.left = box2.offsetLeft - 3 + "px";
//           box2.style.top = box2.offsetTop - 5 + "px";
           move();
         }, 50);
        for (i = 0; i < box.length; i++) {
            var box2 = box[i];
            if (enemy1.offsetLeft <= box2.offsetLeft + box2.offsetWidth && enemy1.offsetLeft + enemy1.offsetWidth >= box2.offsetLeft && enemy1.offsetTop + enemy1.offsetHeight >= box2.offsetTop && enemy1.offsetTop <= box2.offsetTop + box2.offsetHeight) {
                enemy1.style.top = enemy1.offsetTop - 3 + "px";
            }
        }
       }
//       else{
//         alert("Столкновение");
//
//       }
//    }

    move();
}
