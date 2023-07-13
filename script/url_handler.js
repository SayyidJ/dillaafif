const getTamu = () => {
  let param = new URLSearchParams(window.location.search);
  console.log(`param: ${param}`);
  if (param.has("to")) {
    const kepada = document.querySelector("#kepada span");
    console.log(kepada);
    const tamu = param.get("to");
    console.log(`tamu: ${tamu}`);
    kepada.textContent = tamu;
  }
};

getTamu();
