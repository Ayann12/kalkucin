window.onload = function () {

    // Ambil tombol
    let button = document.getElementById("calculate");
    let resetButton = document.getElementById("reset");

    // Event Calculate
    button.addEventListener("click", calculatelove);

    // Event Reset
    resetButton.addEventListener("click", resetLove);
};


/* =========================
   CALCULATE LOVE
========================= */

function calculatelove() {

    // Ambil nama
    let yourName =
        document.getElementById("your-name").value.trim();

    let crushName =
        document.getElementById("crush-name").value.trim();


    // Cek apakah input kosong
    if (yourName === "" || crushName === "") {

        alert(
            "Masukkan nama kamu dan nama pasangan terlebih dahulu! ❤️"
        );

        return;
    }


    // Generate angka 0 - 100
    let percentage =
        Math.floor(Math.random() * 101);


    // Tampilkan pesan
    document.getElementById("result-message").innerText =
        yourName +
        " and " +
        crushName +
        "'s chance of love:";


    // Tampilkan persentase
    document.getElementById("result-percentage").innerText =
        percentage + "% ❤️";


    // Disable Calculate
    document.getElementById("calculate").disabled = true;


    // Tampilkan tombol Reset
    document.getElementById("reset").style.display = "block";


    // Disable input setelah dihitung
    document.getElementById("your-name").disabled = true;

    document.getElementById("crush-name").disabled = true;
}


/* =========================
   RESET
========================= */

function resetLove() {

    // Kosongkan input
    document.getElementById("your-name").value = "";

    document.getElementById("crush-name").value = "";


    // Aktifkan input
    document.getElementById("your-name").disabled = false;

    document.getElementById("crush-name").disabled = false;


    // Kosongkan hasil
    document.getElementById("result-message").innerText = "";

    document.getElementById("result-percentage").innerText = "";


    // Aktifkan Calculate
    document.getElementById("calculate").disabled = false;


    // Sembunyikan Reset
    document.getElementById("reset").style.display = "none";
}