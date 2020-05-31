function packman() {
    //создаем героя
    packman = document.createElement("div");
    packman.className = "packman";
    //    packman.id = "packman";
    igrapole.appendChild(packman);
}
packman()

function enemy() {
    //создаем врагов
    enemy1 = document.createElement("div");
    enemy1.id = "enemy1";
    igrapole.appendChild(enemy1);
    enemy2 = document.createElement("div");
    enemy2.id = "enemy2";
    igrapole.appendChild(enemy2);
}
enemy()
