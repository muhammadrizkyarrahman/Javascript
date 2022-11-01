// Function

// No. 1

function saying(){
    console.log("Halo!");
}

saying();

console.log("---------------------");

// No. 2

var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1, num2);

function kalikan(){
    return num1 * num2;
}

console.log(hasilKali);

console.log("---------------------");

// No. 3

var name = "Andy";
var age = 30;
var addres = "Kulu-Kulu";
var hobby = "Soccer";

var introducing = introduce(name, age, addres, hobby);

function introduce(){
    return "Nama saya " + name + " umur saya " + age + " tahun, " + "alamat saya di " + addres + " dan hobby saya " + hobby;
}

console.log(introducing);