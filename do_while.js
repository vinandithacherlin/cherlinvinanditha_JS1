var bilangan;
do {
  bilangan = parseInt(prompt("Masukkan bilangan positif:"));
} while (isNaN(bilangan) || bilangan <= 0);

console.log("Anda memasukkan bilangan positif: " + bilangan);
