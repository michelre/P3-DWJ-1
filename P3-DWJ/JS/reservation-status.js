class ReservationStatus {

  constructor(station){
    this.station = station;
    this.displayStationInfo();
  }

	
  displayStationInfo(){
    if(!this.station){
      $('.reservation-status').hide();
    } else {
      $('.reservation-status').show();
    }
    $('#confirm-address').text(this.station.address);
    $('#rest-time').text(infoTimer);
  }
/*
	
	const timer = setInterval(function(){
		const infoTimer = min + " : " + sec;
		const min = 20;
		const sec = 00;
		
		if (min === 0){// on stop le timer 
			clearInterval(calcul);
			
		}
		
		if (sec =< 60){ // si sec est inférieur a 60 on enlève 1
			
			sec--
					 
		};
		
		else (sec === 0){ // si sec égale 0 on enleve 1 a min et on remet sec a 59
			min - 1;
			sec = 59;
		};
		console.log (timer);
	},100);
*/
}
