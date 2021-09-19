export default class DateModel {
  constructor(date) {
    this.date = date;
  }

  getyear() {
    return new Date(this.date)?.getFullYear();
  }

  getDate() {
    return new Date(this.date)?.getDate();
  }

  getFullMonth() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return months[new Date(this.date)?.getMonth()];
  }
}
