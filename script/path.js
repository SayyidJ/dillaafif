const buatClip = () => {
  const lebar = 450.0;
  const tinggi = window.innerHeight;

  const path = `M0,0 L0,${tinggi * 0.95} C${lebar / 2 - 112.5},${tinggi},${
    lebar / 2 + 112.5
  },${tinggi},${lebar},${tinggi * 0.95} L${lebar},0 Z`;

  const doc = document.documentElement;
  doc.style.setProperty("--isi-judul-bg-path", `path("${path}")`);
};

buatClip();
