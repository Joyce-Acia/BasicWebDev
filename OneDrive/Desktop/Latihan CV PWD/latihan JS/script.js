function nama() {
    var nam = document.getElementById("name").value;
    alert("Hello, " + nam + "!");
    document.getElementById("tampil_data").innerHTML = nam;
} 

function color(warna) {
    document.getElementById("tampil").style.backgroundColor = warna;

}