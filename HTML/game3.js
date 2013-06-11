window.onload(function() {

	Crafty.modules({ 'crafty-debug-bar': 'release' }, function () {
		Crafty.debugBar.show();
	});	

	/*
	alert("BP 1");
	
	
	var WIDTH = 800,
		HEIGHT = 640;
		
	Crafty.init(WIDTH,HEIGHT,30);
	
	//Load iso grid
	var iso = Crafty.isometric.size(32);
	
	iso.place(2,1,0,Crafty.e('2D, DOM, Color').color('red').attr({w: 32, h: 32}));
	*/
});