
function renderVysledek(result) {
  return `
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
}
if (typeof module !== 'undefined') module.exports = { renderVysledek };
