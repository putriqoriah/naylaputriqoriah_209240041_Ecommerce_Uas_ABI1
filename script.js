function checkoutWhatsApp() {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  if (keranjang.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  let pesan = "Halo! Saya mau pesan:\n";
  keranjang.forEach((item) => {
    pesan += `- ${item.nama} x${
      item.jumlah
    } (Rp${item.harga.toLocaleString()})\n`;
  });

  const total = keranjang.reduce(
    (sum, item) => sum + item.harga * item.jumlah,
    0
  );
  const item = { nama, ukuran, harga, gambar, jumlah: 1 };

  pesan += `\nTotal: Rp${total.toLocaleString()}`;

  const encoded = encodeURIComponent(pesan);
  const nomorTujuan = "6281234567890"; // ganti dengan nomor WA kamu
  const url = `https://wa.me/${nomorTujuan}?text=${encoded}`;
  window.open(url, "_blank");
}
function checkoutSimulasi() {
  alert("Terima kasih! Transaksi berhasil.");
  localStorage.removeItem("keranjang");
  updateJumlahKeranjang(); // Reset angka di header
  document.getElementById("keranjang-box").innerHTML =
    "<p>Keranjang kosong.</p>";
}
function tambahKeKeranjang(produk) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existing = cart.find(
    (item) => item.id === produk.id && item.ukuran === produk.ukuran
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    produk.quantity = 1;
    cart.push(produk);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount(); // ⬅ update angka setelah nambah
}
