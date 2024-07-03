const today = new Date();
const year = today.getFullYear();

const numberToGeorgian = (num) => {
  const georgianNumbers = {
    0: "",
    1: "ერთი",
    2: "ორი",
    3: "სამი",
    4: "ოთხი",
    5: "ხუთი",
    6: "ექვსი",
    7: "შვიდი",
    8: "რვა",
    9: "ცხრა",
    10: "ათი",
    11: "თერთმეტი",
    12: "თორმეტი",
    13: "ცამეტი",
    14: "თოთხმეტი",
    15: "თხუთმეტი",
    16: "თექვსმეტი",
    17: "ჩვიდმეტი",
    18: "თვრამეტი",
    19: "ცხრამეტი",
    20: "ოცი",
    30: "ოცდაათი",
    40: "ორმოცი",
    50: "ორმოცდაათი",
    60: "სამოცი",
    70: "სამოცდაათი",
    80: "ოთხმოცი",
    90: "ოთხმოცდაათი"
  };

  if (num <= 20) return georgianNumbers[num];
  if (num < 100) return georgianNumbers[Math.floor(num / 10) * 10] + (num % 10 !== 0 ? georgianNumbers[num % 10] : "");
  if (num < 1000) return numberToGeorgian(Math.floor(num / 100)) + "ასი" + (num % 100 !== 0 ? numberToGeorgian(num % 100) : "");
  if (num < 10000) return numberToGeorgian(Math.floor(num / 1000)) + "ათას" + (num % 1000 !== 0 ? numberToGeorgian(num % 1000) : "");
  return "number too large";
};

const yearInWords = (year) => {
  return numberToGeorgian(year);
};

console.log(yearInWords(year));
