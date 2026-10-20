
function capNhatDongHo() {
    var ngay = new Date();

    var gio = ngay.getHours();
    var phut = ngay.getMinutes();
    var giay = ngay.getSeconds();

    var gioText = String(gio).padStart(2, "0");
    var phutText = String(phut).padStart(2, "0");
    var giayText = String(giay).padStart(2, "0");

    document.getElementById("gio").innerText = gioText;
    document.getElementById("phut").innerText = phutText;
    document.getElementById("giay").innerText = giayText;

    var loiChao = "";

    if (gio >= 5 && gio < 12) {
        loiChao = "Chào buổi sáng";
    } else if (gio >= 12 && gio < 18) {
        loiChao = "Chào buổi chiều";
    } else {
        loiChao = "Chào buổi tối";
    }

    document.getElementById("loiChao").innerText = loiChao;
}

capNhatDongHo();
setInterval(capNhatDongHo, 1000);
