let reservationStatus = null;

function initMap() {
  const lyonCoord = {lat: 45.7352936, lng: 4.827222};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: lyonCoord
  });
  new GoogleMap(map, reservationStatus);
}

/**
 * Immediately Invoked Function Expression (IIFE)
 */
(function restoreReservationStatus(){
  const station = JSON.parse(sessionStorage.getItem('station'));
  const restTime = parseInt(sessionStorage.getItem('restTime'));

  if(restTime > 0){
    reservationStatus = new ReservationStatus(station, restTime);
  }
})();
