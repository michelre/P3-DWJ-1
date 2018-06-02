class ReservationStatus {

    constructor(station, restTime) {
        this.station = station;
        this.restTime = restTime || 1200000;//ON DIS QUE THIS.RESTIME ET SOIS EGALE A RESTIME OU 1200000
        this.displayStationInfo();
    }


    displayStationInfo() {//FONCTION POUR MONTRER OU PAS LES INFORMATIONS DE LA STATION
        if (!this.station) {
            $('.reservation-status').hide();
        } else {
            $('.reservation-status').show();
        }
        $('#confirm-address').text(this.station.address);

        let restTime = this.restTime;
        this.timer = setInterval(() => {//FONCTION POUR LE DECOMPTE DE 20MIN
            restTime -= 1000;
            this.displayRestTime(restTime);
            this.updateTimeStorage(restTime);
            if (restTime === 0) {
                clearInterval(timer);
            }
        }, 1000);
    }

    displayRestTime(restTime) {//UTILISATION D'UNE LIBRAIRIE POUR CHANGER LE FORMAT D'AFFICHAGE DU TPS RESTANT
        const formatedRestTime = moment(restTime).format('mm:ss');
        $('#rest-time').text(formatedRestTime);
    }

    updateTimeStorage(restTime){//MIS EN SESSIONS STORAGE DU TPS RESTANTS
      sessionStorage.setItem('restTime', restTime);
    }

  stopExistingTimer(){//FONCTION POUR SUPPRIMER LE TIMER A 0 OU ALORS LORS D'UNE SELECTION D'UNE AUTRE STATION
      clearInterval(this.timer);
    }

}
