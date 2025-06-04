
function spocitejVyplatu(data) {
  const vyplata = Math.round(data.trzba * 0.3);
  const kOdevzdani = data.trzba - vyplata - data.kartou - data.fakturou;
  const doplatek = Math.max(0, data.palivo + data.myti - (data.kartou + data.fakturou + kOdevzdani));
  return { ...data, vyplata, kOdevzdani, doplatek };
}
if (typeof module !== 'undefined') module.exports = { spocitejVyplatu };
