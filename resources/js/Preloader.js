Game.Preloader = function(game){

	this.preloadBar = null;
};

Game.Preloader.prototype = {
	preload:function(){
		this.preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloaderBar');

		this.preloadBar.anchor.setTo(0.5,0.5);

		this.time.advancedTiming = true;

		this.load.setPreloadSprite(this.preloadBar);

		//this.load.tilemap('map','resources/level1.csv');
        
        this.load.tilemap('map','resources/level3.csv');
       
        this.load.audio('boden', ['bodenstaendig_2000_in_rock_4bit.mp3']);
         this.sound.play('boden');
        
		this.load.image('tileset','resources/tileset.png');
        
        this.load.spritesheet('player','resources/player.png',24,26);
        
        

	},
	create:function(){
		this.state.start('Level1');
	}

}