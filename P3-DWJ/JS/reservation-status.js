class ReservationStatus {

  constructor(station) {
    this.station = station;
    this.displayStationInfo();
  }


  displayStationInfo() {
    if (!this.station) {
      $('.reservation-status').hide();
    } else {
      $('.reservation-status').show();
    }
    $('#confirm-address').text(this.station.address);

    let restTime = 1200000;
    const timer = setInterval(() => {
      restTime -= 1000;
      this.displayRestTime(restTime);
      if (restTime === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  displayRestTime(restTime) {
    const formatedRestTime = moment(restTime).format('mm:ss')
    $('#rest-time').text(formatedRestTime);
  }
}
