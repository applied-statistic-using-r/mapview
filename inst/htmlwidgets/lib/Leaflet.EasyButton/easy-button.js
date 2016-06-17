LeafletWidget.methods.addEasyButton = function (xmin, ymin, xmax, ymax, label, icon) {

  if (this.easyButton) {
		this.easyButton.removeFrom(this);
	}

  var bx = [[ymin, xmin], [ymax, xmax]];

  var easyButton = new L.easyButton({
    states: [{
            stateName: label,   // name the state
            icon:      icon,          // and define its properties
            title:     label, // like its title
            onClick: function(btn, map){
                map.fitBounds(bx);
                btn.state(label);
            }
    }]
  })

  easyButton.addTo(this);

  this.currentEasyButton = easyButton;

};


