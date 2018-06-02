class GoogleMap {
  constructor(map, reservationStatus) {
    this.map = map;
    this.reservationStatus = reservationStatus;
    this.initMarkers();
    this.initEvents();
  }

  initEvents() {// INIT BOUTON + SESSION STORAGE VERIF SI DEMANDE DEJA EXISTANTE
    const reserverButton = document.querySelector('#book-btn');
    reserverButton.addEventListener('click', () => {
      if(this.reservationStatus){
        this.reservationStatus.stopExistingTimer();
      }
      this.reservationStatus = new ReservationStatus(this.station);
      this.updateAddressStorage(JSON.stringify({address: this.station.address}));
    })//JSON.STRINGIFY UTILISE POUR CONVERTIR LA VALEUR EN CHAINE JSON 
  }

  initMarkers() {// INIT DE LA CARTE GOOGLE 
    $.getJSON('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=3921ff9d311bb8bb75d1c072d331c4987af28732') // Promesse
      .then((data) => {//SI DATA DISPO ON EFFECTUE CE QUI EST EN DESSOUS
        // Syntaxe en utilisant un map
        const markers = data.map((station) => {//MIS DES INFO DES STATIONS DANS UNE VARIABLE
          const marker = new google.maps.Marker({//MIS DES INFO DES MARQUEURS DANS UNE VARIABLE 
            map: this.map,
            position: station.position,
            icon: `http://maps.google.com/mapfiles/ms/icons/${this.getMarkerColor(station)}.png`

          });
          this.createMarkerListener(marker, station);//APPEL FONCTION DES MARQUEURS
          return marker;
        });
        new MarkerClusterer(this.map, markers, {
          imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });
      }, function (err) {//SINON ON EFFECTUE UNE ALERTE ERROR
        alert( "ERROR MAP" )
      });

  }

  getMarkerColor(station) {//FONCTION POUR DEFINIR LA COULEUR DES MARQUEURS EN FONCTION DES INFO DES STATION 
    if (station.status === "CLOSED") {
      return 'red-dot';
    }
    if (station.available_bikes === 0) {
      return 'yellow-dot';
    }
    return 'green-dot';

  }


  createMarkerListener(marker, station) {//FONCTION POUR CREE LES MARQUEURS
    marker.addListener('click', () => {
      this.station = station;
      this.showReservationForm();//APPEL DE LA FONCTION POUR MONTRER LES INFO DANS LE FORMULAIRE
    });
  }

  translateStatus(status) {//FONCTION POUR TRANSFORMER L'ANGLAIS EN FRANCAIS
    if (status === 'OPEN') {
      return 'OUVERTE';
    }
    return 'FERMEE';
  }

  showReservationForm() {//CREATION DE LA FONCTION POUR AFFICHAGE DES INFO DE LA STATION DANS LE FORMULAIRE
    const reserver = document.querySelector(".reserver");
    const info = document.querySelector(".informations");
    const form = document.querySelector(".formulaire");
    const detailReservation = document.querySelector("#reserver-action");
    reserver.style.display = "block";
    info.style.display = "block";
    form.style.display = "block";

    info.innerHTML = `
          <p>Adresse : <span>${this.station.address}</span><p>
          <p>Nb de places : <span>${this.station.available_bike_stands}</span><p>
          <p>Nb de places disponibles: <span>${this.station.available_bikes}</span><p>
          <p>État de la station: <span>${this.translateStatus(this.station.status)}</span></p>
        `;
    detailReservation.style.display = 'none';
    if (this.station.status === "OPEN" && this.station.available_bikes > 0) {
      detailReservation.style.display = 'block';
      this.createCanvas();
    }
  }

  createCanvas() {//FONCTION POUR L'APPEL DE LA CLASS CANVAS
    this.canvas = new Canvas();
  }

  updateAddressStorage(address) {//FONCTION STORAGE POUR ENREGISTREMENT DES INFORMATION LORS DE LA RESERVATION 
    sessionStorage.setItem('station', address);
  }
}
