let reservationStatus = null;

function initMap() {//INIT DE LA MAP GOOGLE ET DE L'EMPLACEMENT AU CHARGEMENT
  const lyonCoord = {lat: 45.7352936, lng: 4.827222};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: lyonCoord
  });
  new GoogleMap(map, reservationStatus);
}

/**
 * Immediately Invoked Function Expression (IIFE)FONTION IMMEDIATE PERMET DE L'EFFECTUER AVANT TOUTES AUTRES FONCTIONS
 */
(function restoreReservationStatus(){
  const station = JSON.parse(sessionStorage.getItem('station'));//UTILISATION DE JSON.PARSE POUR CHANGER EN VALEUR 
  const restTime = parseInt(sessionStorage.getItem('restTime'));//UTILISATION DE PARSE.INT POUR METTRE EN ENTIER

  if(restTime > 0){
    reservationStatus = new ReservationStatus(station, restTime);
  }
})();
