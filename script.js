// Penjumalahan

document.getElementById('penjumlahan-input-1').addEventListener('keyup', penjumlahan)
document.getElementById('penjumlahan-input-2').addEventListener('keyup', penjumlahan)

let penjumlahanInput_1 = document.getElementById('penjumlahan-input-1');
let penjumlahanInput_2 = document.getElementById('penjumlahan-input-2');

function penjumlahan() {
    let angka_1 = Number(penjumlahanInput_1.value)
    let angka_2 = Number(penjumlahanInput_2.value)
    let hasil = angka_1 + angka_2

    document.getElementById('penjumlahan-hasil').innerHTML = hasil
    
}

// Pengurangan

document.getElementById('pengurangan-input-1').addEventListener('keyup', pengurangan)
document.getElementById('pengurangan-input-2').addEventListener('keyup', pengurangan)

let penguranganInput_1 = document.getElementById('pengurangan-input-1');
let penguranganInput_2 = document.getElementById('pengurangan-input-2');

function pengurangan() {
    let angka_1 = Number(penguranganInput_1.value)
    let angka_2 = Number(penguranganInput_2.value)
    let hasil = angka_1 - angka_2

    document.getElementById('pengurangan-hasil').innerHTML = hasil
    
}

// Perkalian

document.getElementById('perkalian-input-1').addEventListener('keyup', perkalian)
document.getElementById('perkalian-input-2').addEventListener('keyup', perkalian)

let perkalianInput_1 = document.getElementById('perkalian-input-1');
let perkalianInput_2 = document.getElementById('perkalian-input-2');

function perkalian() {
    let angka_1 = Number(perkalianInput_1.value)
    let angka_2 = Number(perkalianInput_2.value)
    let hasil = angka_1 * angka_2

    document.getElementById('perkalian-hasil').innerHTML = hasil
    
}

// Pembagian

document.getElementById('pembagian-input-1').addEventListener('keyup', pembagian)
document.getElementById('pembagian-input-2').addEventListener('keyup', pembagian)

let pembagianInput_1 = document.getElementById('pembagian-input-1');
let pembagianInput_2 = document.getElementById('pembagian-input-2');

function pembagian() {
    let angka_1 = Number(pembagianInput_1.value)
    let angka_2 = Number(pembagianInput_2.value)
    let hasil = angka_1 / angka_2

    document.getElementById('pembagian-hasil').innerHTML = hasil
    
}