const today = new Date();
const weekday = today.getDay();
const weekdays = (weekday) => {
  if (weekday == 1) {
    return "ორშაბათი";
  } else if (weekday == 2) {
    return "სამშაბათი";
  } else if (weekday == 3) {
    return "ოთხშაბათ";
  } else if (weekday == 4) {
    return "ხუთშაბათ";
  } else if (weekday == 5) {
    return "პარასკევი";
  } else if (weekday == 6) {
    return "შაბათი";
  } else if (weekday == 0) {
    return "კვირა";
  }
};
// ------------------------------
//  ესეც \/
// const today = new Date();
// const weekday = today.getDay();
// const weekdays = (weekday) => {
//   switch (weekday) {
//     case 0:
//       return "კვირა";
//     case 1:
//       return "ორშაბათი";
//     case 2:
//       return "სამშაბათი";
//     case 3:
//       return "ოთხშაბათი";
//     case 4:
//       return "ხუთშაბათი";
//     case 5:
//       return "პარასკევი";
//     case 6:
//       return "შაბათი";
//     default:
//       return "უცნობი დღე";
//   }
// };
// ------------------------------


console.log(weekdays(weekday));
