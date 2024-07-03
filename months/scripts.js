const today = new Date();
let month = today.getMonth();

const months = (month) => {
  if (month == 0) {
    return "იანვარი";
  } else if (month == 1) {
    return "თებერვალი";
  } else if (month == 2) {
    return "მარტი";
  } else if (month == 3) {
    return "აპრილი";
  } else if (month == 4) {
    return "მაისი";
  } else if (month == 5) {
    return "ივნისი";
  } else if (month == 6) {
    return "ივლის";
  } else if (month == 7) {
    return "აგვისტო";
  } else if (month == 8) {
    return "სექტემბერი";
  } else if (month == 9) {
    return "ოქტომბერი";
  } else if (month == 10) {
    return "ნოემბერი";
  } else if (month == 11) {
    return "დეკემბერი";
  }
};
console.log(monthAll(month));
