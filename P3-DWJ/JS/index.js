function initMap() {
  const lyonCoord = {lat: 45.7352936, lng: 4.827222};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: lyonCoord
  });
  new GoogleMap(map);
}

/**
 * 1. Faire fonctionner le canvas (nouvelle objet) (https://stackoverflow.com/a/7438862)
 * 2. Stocker dans le session storage le temps restant et l'adresse de la station réservée
 * 3. Restaurer la réservation effectuée précédemment au rechargement de la page (si existante et temps non expiré)
 * */
