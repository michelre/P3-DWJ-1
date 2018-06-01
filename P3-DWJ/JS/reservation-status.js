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

    //session Storage

    sessionStorage.setItem(station, this.station.address);
    sessionStorage.setItem(restTime, $('#rest-time'));

    if (this.station.address && & $('#rest-time') === null) {
        sessionStorage.removeItem(this.station.address && & $('#rest-time'));
    }
    return this.station.address = sessionStorage.getItem(this.station.address),
        $('#rest-time') = sessionStorage.getItem($('#rest-time'));

}