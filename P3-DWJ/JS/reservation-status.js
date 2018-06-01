class ReservationStatus {

    constructor(station, restTime) {
        this.station = station;
        this.restTime = restTime || 1200000;
        this.displayStationInfo();
    }


    displayStationInfo() {
        if (!this.station) {
            $('.reservation-status').hide();
        } else {
            $('.reservation-status').show();
        }
        $('#confirm-address').text(this.station.address);

        let restTime = this.restTime;
        this.timer = setInterval(() => {
            restTime -= 1000;
            this.displayRestTime(restTime);
            this.updateTimeStorage(restTime);
            if (restTime === 0) {
                clearInterval(timer);
            }
        }, 1000);
    }

    displayRestTime(restTime) {
        const formatedRestTime = moment(restTime).format('mm:ss');
        $('#rest-time').text(formatedRestTime);
    }

    updateTimeStorage(restTime){
      sessionStorage.setItem('restTime', restTime);
    }

  stopExistingTimer(){
      clearInterval(this.timer);
    }

}
