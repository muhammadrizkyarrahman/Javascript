// if-else

var nama = "Andi";
var peran = "Penyihir";

if(nama.length === 0 && peran.length === 0){
    console.log("Nama harus diisi!")
} else if(nama.length > 0 && peran.length === 0){
    console.log("Halo" + " " + nama + "," + " " + "pilih peranmu untuk memulai game!");
} else {
    if(nama.length > 0 && peran === "Penyihir"){
        console.log("Selamat datang di Dunia Werewolf," + " " +nama);
        console.log("Halo Penyihir" + " " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
    } else if(nama.length > 0 && peran === "Guard"){
        console.log("Selamat datang di Dunia Werewolf," + " " +nama);
        console.log("Halo Guard" + " " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
    }  else if(nama.length > 0 && peran === "Werewolf"){
        console.log("Selamat datang di Dunia Werewolf," + " " +nama);
        console.log("Halo Werewolf" + " " + nama + ", kamu akan memakan mangsa setiap malam!");
    }
}

console.log("---------------------------")

// switch
var tanggal = 21;
var bulan = 5;
var tahun = 1945;

switch(bulan){
    case 1 : { console.log(tanggal + " " + "Januari" + " " + tahun); break;};
    case 2 : { console.log(tanggal + " " + "Februari" + " " + tahun); break;};
    case 3 : { console.log(tanggal + " " + "Maret" + " " + tahun); break;};
    case 4 : { console.log(tanggal + " " + "April" + " " + tahun); break;};
    case 5 : { console.log(tanggal + " " + "Mei" + " " + tahun); break;};
    case 6 : { console.log(tanggal + " " + "Juni" + " " + tahun); break;};
    case 7 : { console.log(tanggal + " " + "Juli" + " " + tahun); break;};
    case 8 : { console.log(tanggal + " " + "Agustus" + " " + tahun); break;};
    case 9 : { console.log(tanggal + " " + "September" + " " + tahun); break;};
    case 10 : { console.log(tanggal + " " + "Oktober" + " " + tahun); break;};
    case 11 : { console.log(tanggal + " " + "November" + " " + tahun); break;};
    case 12 : { console.log(tanggal + " " + "Desember" + " " + tahun); break;};
    default: { console.log("Bulan yang anda masukkan salah!");};
};

