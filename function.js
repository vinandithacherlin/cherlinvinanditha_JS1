function jumlahkan(...angka) {
    var total = 0;
    for (let num of angka) {
      total += num;
    }
    return total;
  }
  
  var hasilJumlah = jumlahkan(10, 20, 30, 40, 50);
  console.log("Hasil penjumlahan: " + hasilJumlah);
  