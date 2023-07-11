const perbaikiTinggi = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  console.log(`change app height: ${window.innerHeight}`);
};

window.addEventListener("resize", perbaikiTinggi);
perbaikiTinggi();
