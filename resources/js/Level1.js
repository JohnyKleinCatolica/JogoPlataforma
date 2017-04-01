Game.Level1 = function(game){};

var map;
var layer;
var player;
var controls = {};
var playerSpeed = 10;
var jumpTimer = 0;
var music;

Game.Level1.prototype = {
	create:function(){
        
         music = this.sound.play('boden');
        
		this.stage.backgroundColor = '#F0E68C';
        
        this.physics.arcade.gravity.y = 1400;

		map = this.add.tilemap('map',64,64);

		map.addTilesetImage('tileset');

		layer = map.createLayer(0);

		layer.resizeWorld();
        
        map.setCollisionBetween(0,2);
        
        map.setTileIndexCallback(0,this.resetPlayer,this);
        
        player = this.add.sprite(100,560,'player');
        player.anchor.setTo(0.5,0.5);
        
        player.animations.add('idle',[0,1],1,true);
        
         player.animations.add('jump',[2],1,true);
        
         player.animations.add('run',[3,4,5,6,7,8],7,true);
        
        
        this.physics.arcade.enable(player);
        this.camera.follow(player);
        player.body.collideWorldBounds = true;
        
        controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            left: this.input.keyboard.addKey(Phaser.Keyboard.A),
            up: this.input.keyboard.addKey(Phaser.Keyboard.W),
        };
        
        
        
	},
	update:function(){
        
        this.physics.arcade.collide(player,layer);
        
        if(controls.up.isDown){
            player.animations.play('jump');
        }
        
        if(controls.right.isDown){
            player.animations.play('run');
            player.scale.setTo(1,1);
            player.body.velocity.x += playerSpeed;
        }
        
        if(controls.left.isDown){
            player.animations.play('run');
            player.scale.setTo(-1,1);
            player.body.velocity.x -= playerSpeed;
        }
        
        if(controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now > jumpTimer){
            player.body.velocity.y = -700;
            jumpTimer = this.time.now + 750;
        }
        
        if(player.body.velocity.x == 0 && player.body.velocity.y == 0){
            player.animations.play('idle');
        }
        
        
	},
    
    resetPlayer:function(){
        player.reset(100,560);
    }
}