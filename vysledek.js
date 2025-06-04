
document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("taxiResult"));
  const container = document.getElementById("resultContent");

  if (!data) {
    container.innerHTML = "<p>❗Data nenalezena. Prosím vraťte se a vyplňte formulář.</p>";
    return;
  }

  const date = new Date().toLocaleString("cs-CZ");

  container.innerHTML = `
    <p><strong>📅 Datum:</strong> ${date}</p>
    <p><strong>👤 Řidič:</strong> ${data.ridic}</p>
    <p><strong>🕒 Směna:</strong> ${data.smena}</p>
    <hr>
    <p><strong>💰 Tržba:</strong> ${data.trzba} Kč</p>
    <p><strong>⛽ Palivo:</strong> ${data.palivo} Kč</p>
    <p><strong>🚗 Mytí:</strong> ${data.myti} Kč</p>
    <p><strong>💳 Kartou:</strong> ${data.kartou} Kč</p>
    <p><strong>📄 Faktura:</strong> ${data.fakturou} Kč</p>
    <p><strong>📍 Přístavné:</strong> ${data.pristavne} Kč</p>
    <p><strong>💸 Jiné platby:</strong> ${data.jine} Kč</p>
    <hr>
    <p><strong>📦 K odevzdání:</strong> <span class="highlight">${data.kOdevzdani} Kč</span></p>
    <p><strong>👛 Výplata řidiče:</strong> <span class="green">${data.vyplata} Kč</span></p>
    ${data.doplatek > 0 ? `<p class="alert blikajici-hlaska">🚨 Tržba/km je příliš nízká: Doplatek řidiče ${data.doplatek} Kč (min. 15 Kč/km)</p>` : ""}
  `;
});

function goBack() {
  localStorage.removeItem("taxiResult");
  window.location.href = "index.html";
}

function share() {
  const shareText = document.getElementById("resultContent").innerText;
  if (navigator.share) {
    navigator.share({
      title: "RB TAXI Výčetka",
      text: shareText,
    });
  } else {
    alert("Sdílení není podporováno v tomto prohlížeči.");
  }
}


  


const highlight = `
  <p><strong>Řidič:</strong> ${result.ridic}</p>
  <p><strong>Typ směny:</strong> ${result.smena}</p>
  <p><strong>Tržba:</strong> ${result.trzba} Kč</p>
  <p><strong>Najaté km:</strong> ${result.km} km</p>
  <p><strong>Palivo:</strong> ${result.palivo} Kč</p>
  <p><strong>Mytí:</strong> ${result.myti} Kč</p>
  <p><strong>Kartou:</strong> ${result.kartou} Kč</p>
  <p><strong>Fakturou:</strong> ${result.fakturou} Kč</p>
  <p><strong>Přístavné:</strong> ${result.pristavne} Kč</p>
  <p><strong>Jiné platby:</strong> ${result.jine} Kč</p>
  <p><strong style="color: green; font-weight: bold;">Výplata řidiče:</strong> <span style="color: green; font-weight: bold;">${result.vyplata} Kč</span></p>
  <p><strong style="color: navy;">K odevzdání:</strong> <span style="color: navy;">${result.kOdevzdani} Kč</span></p>
  <p><strong>Doplatek:</strong> ${result.doplatek} Kč</p>
`;
document.getElementById("outputBox").innerHTML = highlight;
