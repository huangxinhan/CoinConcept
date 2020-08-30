//For this new project, resuse the same art to start the prototype
var BootScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function BootScene ()
    {
        Phaser.Scene.call(this, { key: 'BootScene' });
    },

    preload: function ()
    {
        // map tiles
        this.load.image('mapset1', 'assets/map1/mapset1.jpg');
        
        // map in json format


        this.load.tilemapTiledJSON('map1', 'assets/map1/map1.json');
        
        
        // load all sprites for battle UI
        this.load.image("reenasprite", "assets/sprites/Reena.png");
        this.load.image("alyenesprite", "assets/sprites/Alyene.png");
        this.load.image('yunesprite', 'assets/sprites/Yune.png');
        this.load.image('yuneallysprite', 'assets/sprites/Yune_Ally.png');
        this.load.image('soldiersprite', 'assets/sprites/Soldier.png');
        this.load.image('soldierallysprite', 'assets/sprites/Soldier_Ally.png');
        this.load.image('lostsoulsprite', 'assets/sprites/LostSoul.png');
        this.load.image('incognitosprite', 'assets/sprites/Incognito.png');
        this.load.image('crawlersprite', 'assets/sprites/Crawler.png');
        this.load.image('flyersprite', 'assets/sprites/Flyer.png');
        this.load.image('colossussprite', 'assets/sprites/Colossus.png');
        this.load.image('annesprite', 'assets/sprites/Anne.png');
        this.load.image('soldiersprite', 'assets/sprites/Soldier.png');
        this.load.image('soldierallysprite', 'assets/sprites/Soldier_Ally.png');
        this.load.image('androidsprite', 'assets/sprites/Android.png');
        this.load.image('dusksprite', 'assets/sprites/Dusk.png');
        this.load.image('duskallysprite', 'assets/sprites.Dusk_Ally.png');
        
        
        //load menu items
        this.load.image('attack', "assets/menu/attack.png");
        this.load.image('escape', "assets/menu/escape.png");
        this.load.image('guard', "assets/menu/guard.png");
        this.load.image('items', 'assets/menu/items.png');
        this.load.image('skill', 'assets/menu/skill.png');
        this.load.image('skip', 'assets/menu/skip.png');

        //load all the status images
        this.load.image('attackdown', 'assets/status/attackdown.png');
        this.load.image('attackup', 'assets/status/attackup.png');
        this.load.image('bindattack', 'assets/statusbindattack.png');
        this.load.image('critup', 'assets/status/critup.png');
        this.load.image('defensedown', 'assets/status/defensedown.png');
        this.load.image('defenseup', 'assets/status/defenseup.png');
        this.load.image('paralysis', 'assets/status/paralysis.png');
        this.load.image('poison', 'assets/status/poison.png');
        this.load.image('skillbind', 'assets/status/skillbind.png');

        // player 
        this.load.spritesheet('Reena', 'assets/Character Design/main.png', {frameWidth: 128, frameHeight: 128});

        // load the other char for base world, level1 extends world
        this.load.spritesheet('Alyene', 'assets/Character Design/main_chara.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('Yune', 'assets/Character Design/younger.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('Anne', 'assets/Character Design/Saint.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('Soldier', 'assets/Character Design/soldier.png', {frameWidth: 128, frameHeight: 128});

        //load the enemies
        this.load.spritesheet('LostSoul', 'assets/enemies/lostsoul.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('Incognito', 'assets/enemies/incognito.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('Crawler', 'assets/enemies/crawler.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('Flyer', 'assets/enemies/flyer.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('Colossus', 'assets/enemies/colossus.png', {frameWidth: 256, frameHeight: 256});
        this.load.spritesheet('Android', 'assets/Character Design/FireGirl.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('Dusk', 'assets/Character Design/grimory.png', {frameWidth: 128, frameHeight: 128});
        

        //load battle skills
        this.load.image('rightfulgod', 'assets/skills/rightfulgod.png');    
        this.load.image('cloudnine', 'assets/skills/cloudnine.png');
        this.load.image('almightygod', 'assets/skills/almightygod.png');
        this.load.image('dragonskin', 'assets/skills/dragonskin.png');
        this.load.image('angelictruth', 'assets/skills/angelictruth.png');
        this.load.image('godscale', 'assets/skills/godscale.png');
        this.load.image('heavyarmor', 'assets/skills/heavyarmor.png');
        this.load.image('walkingchurch', 'assets/skills/walkingchurch.png');
        this.load.image('devilbound', 'assets/skills/devilbound.png');
        this.load.image('fury', 'assets/skills/fury.png');
        this.load.image('hawkeye', 'assets/skills/hawkeye.png');
        this.load.image('eagleeye', 'assets/skills/eagleeye.png');
        this.load.image('overdrive', 'assets/skills/overdrive.png');

        //load a dialog box
        this.load.image('dialogbox', 'assets/dialogBox.png');
        this.load.image('expbackground', 'assets/expbackground.png');

        //IT'S CAT TIME!! NYAN
        this.load.spritesheet('cat', 'assets/Character Design/cat.png', {frameWidth: 128, frameHeight: 128});

        //fonts?
        this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
        this.load.bitmapFont('desyrel-pink', 'assets/fonts/bitmap/desyrel-pink.png', 'assets/fonts/bitmap/desyrel-pink.xml');
        this.load.bitmapFont('chiller', 'assets/fonts/bitmap/chiller.png', 'assets/fonts/bitmap/chiller.xml');






    },

    create: function ()
    {
        // start the WorldScene
        // Here we actually create a splash art and a Menu
        // Well we don't have the splash art at the moment so let's just do the menu
        
        this.cameras.main.setBackgroundColor('rgba(250, 218, 94, 1)');
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);       

        this.graphics.strokeRect(90, 600, 300, 50);
        this.graphics.fillRect(90, 600, 300, 50);

        this.graphics.strokeRect(90, 700, 300, 50);
        this.graphics.fillRect(90, 700, 300, 50);

        this.graphics.strokeRect(90, 800, 300, 50);
        this.graphics.fillRect(90, 800, 300, 50);
        
        this.graphics.strokeRect(90, 900, 300, 50);
        this.graphics.fillRect(90, 900, 300, 50);

        var text = this.add.text(1280/2 - 200,
			200, "World Calling: Three Realms", {
				color: "#000000",
				align: "center",
				fontWeight: 'bold',
				font: '60px Arial',
				wordWrap: {
					width: 800,
					useAdvancedWrap: true
				}
        }).setInteractive();
        
        var text1 = this.add.text(185,
			610, "    START    ", {
				color: "#ffffff",
				align: "center",
				fontWeight: 'bold',
				font: '32px Arial',
				wordWrap: {
					width: 800,
					useAdvancedWrap: true
				}
        }).setInteractive();

        text1.on('pointerdown', ()=>{
            this.scene.start('WorldScene');
        });

        var text2 = this.add.text(185,
			710, "LOAD", {
				color: "#ffffff",
				align: "center",
				fontWeight: 'bold',
				font: '32px Arial',
				wordWrap: {
					width: 800,
					useAdvancedWrap: true
				}
        }).setInteractive();

        var text3 = this.add.text(185,
			810, "ABOUT", {
				color: "#ffffff",
				align: "center",
				fontWeight: 'bold',
				font: '32px Arial',
				wordWrap: {
					width: 800,
					useAdvancedWrap: true
				}
        }).setInteractive();

        var text4 = this.add.text(185,
			910, "HELP", {
				color: "#ffffff",
				align: "center",
				fontWeight: 'bold',
				font: '32px Arial',
				wordWrap: {
					width: 800,
					useAdvancedWrap: true
				}
        }).setInteractive();

        
        //this.scene.start('WorldScene');
    }

});

var WorldScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function WorldScene ()
    {
        Phaser.Scene.call(this, { key: 'WorldScene' });
    },

    preload: function ()
    {
        
    },

    create: function ()
    {
        this.spawns = null; //enemy spawns
        //keep an array of all the npcs on this map 
        var npcs = [];
        // create the map
        var level0 = this.make.tilemap({ key: 'map1' });
        
        // first parameter is the name of the tilemap in tiled
        var tiles = level0.addTilesetImage('mapset1', 'mapset1');
        
        // creating the layers
        var traverse = level0.createStaticLayer('traverse', tiles, 0, 0);
        var blocked = level0.createStaticLayer('blocked', tiles, 0, 0);
        
        // make all tiles in obstacles collidable
        blocked.setCollisionByExclusion([-1]);
    
        //list of global attributes that the current player has 

        var animations = []; //a string of animations being stored 

        //conversations array;
        //an array of enemies and players
        this.enemies = [];
        this.players = [];
        this.currentSelectedPlayer = null; //enemy, player, anything. player on the current turn gets selected
        this.index = -1; //index for selecting the current unit

        this.move_phase = false;
        this.skill_phase = false;

        
        //  animation with key 'left', we don't need left and right as we will use one and flip the sprite
        this.anims.create({
            key: 'cat',
            frames: this.anims.generateFrameNumbers('cat', { frames: [0,1]}),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: 'catleft',
            frames: this.anims.generateFrameNumbers('cat', { frames: [2,3]}),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: 'catright',
            frames: this.anims.generateFrameNumbers('cat', { frames: [4,5]}),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Reena', { frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
            repeat: -1
        });
        
        // animation with key 'right'
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('Reena', { frames: [0,1,2,3,4,5,6,7] }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('Reena', { frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('Reena', { frames: [0,1,2,3,4,5,6,7] }),
            frameRate: 5,
            repeat: -1
        });     

        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('Reena', { frames: [24,25,26,27,28,29,30,31] }),
            frameRate: 5,
        });
        
        this.anims.create({
            key: 'defeated',
            frames: this.anims.generateFrameNumbers('Reena', {frames: [32]}),
            frameRate: 1,
            repeat: -1
        })

        //alyene animations
        this.anims.create({
            key: 'rightalyene',
            frames: this.anims.generateFrameNumbers('Alyene', { frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'leftalyene',
            frames: this.anims.generateFrameNumbers('Alyene', { frames: [0,1,2,3,4,5,6,7]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'attackalyene',
            frames: this.anims.generateFrameNumbers('Alyene', { frames: [24,25,26,27,28,29,30,31]}),
            frameRate: 5,
        });
        this.anims.create({
            key: 'defeatedalyene',
            frames: this.anims.generateFrameNumbers('Alyene', { frames: [33]}),
            frameRate: 5,
            repeat: -1
        });

        //yune animations
        this.anims.create({
            key: 'rightyune',
            frames: this.anims.generateFrameNumbers('Yune', {frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'leftyune',
            frames: this.anims.generateFrameNumbers('Yune', {frames: [0,1,2,3,4,5,6,7]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'attackyune',
            frames: this.anims.generateFrameNumbers('Yune', {frames: [16,17,18,19,20,21,22,23]}),
            frameRate: 5,
        });
        this.anims.create({
            key: 'defeatedyune',
            frames: this.anims.generateFrameNumbers('Yune', {frames: [32]}),
            frameRate: 5,
            repeat: -1
        });
        //yune animations
        this.anims.create({
            key: 'rightanne',
            frames: this.anims.generateFrameNumbers('Anne', {frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'leftanne',
            frames: this.anims.generateFrameNumbers('Anne', {frames: [0,1,2,3,4,5,6,7]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'attackanne',
            frames: this.anims.generateFrameNumbers('Anne', {frames: [16,17,18,19,20,21,22,23]}),
            frameRate: 5,
        });
        this.anims.create({
            key: 'defeatedanne',
            frames: this.anims.generateFrameNumbers('Anne', {frames: [32]}),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'rightsoldier',
            frames: this.anims.generateFrameNumbers('Soldier', {frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'leftsoldier',
            frames: this.anims.generateFrameNumbers('Soldier', {frames: [0,1,2,3,4,5,6,7]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'attacksoldier',
            frames: this.anims.generateFrameNumbers('Soldier', {frames: [16,17,18,19,20,21,22,23]}),
            frameRate: 5,
        });
        this.anims.create({
            key: "attackrightsoldier",
            frames: this.anims.generateFrameNumbers('Soldier', {frames: [24,25,26,27,28,29,30,31]}),
            frameRate: 5
        });
        this.anims.create({
            key: 'defeatedsoldier',
            frames: this.anims.generateFrameNumbers('Soldier', {frames: [32]}),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'rightandroid',
            frames: this.anims.generateFrameNumbers('Android', {frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'leftandroid',
            frames: this.anims.generateFrameNumbers('Android', {frames: [0,1,2,3,4,5,6,7]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: "attackandroid",
            frames: this.anims.generateFrameNumbers('Android', {frames: [24,25,26,27,28,29,30,31]}),
            frameRate: 5
        });
        this.anims.create({
            key: 'defeatedandroid',
            frames: this.anims.generateFrameNumbers('Android', {frames: [33]}),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'rightdusk',
            frames: this.anims.generateFrameNumbers('Dusk', {frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'leftdusk',
            frames: this.anims.generateFrameNumbers('Dusk', {frames: [0,1,2,3,4,5,6,7]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: "attackdusk",
            frames: this.anims.generateFrameNumbers('Dusk', {frames: [16,17,18,19,20,21,22,23]}),
            frameRate: 5
        });
        this.anims.create({
            key: "attackrightdusk",
            frames: this.anims.generateFrameNumbers('Dusk', {frames: [24,25,26,27,28,29,30,31]}),
            frameRate: 5
        });
        this.anims.create({
            key: 'defeateddusk',
            frames: this.anims.generateFrameNumbers('Dusk', {frames: [33]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'defeatedduskplayer',
            frames: this.anims.generateFrameNumbers('Dusk', {frames: [32]}),
            frameRate: 5,
            repeat: -1
        });

        //lost soul animations + enemy animations
        this.anims.create({
            key: 'attacklostsoul',
            frames: this.anims.generateFrameNumbers('LostSoul', {frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
        });
        this.anims.create({
            key: 'idlelostsoul',
            frames: this.anims.generateFrameNumbers('LostSoul', {frames: [0,1,2,3,4,5,6,7]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'defeatedlostsoul',
            frames: this.anims.generateFrameNumbers('LostSoul', {frames: [0]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'attackincognito',
            frames: this.anims.generateFrameNumbers('Incognito', {frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
        });
        this.anims.create({
            key: 'idleincognito',
            frames: this.anims.generateFrameNumbers('Incognito', {frames: [0,1,2,3,4,5,6,7]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'defeatedincognito',
            frames: this.anims.generateFrameNumbers('Incognito', {frames: [0]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'attackflyer',
            frames: this.anims.generateFrameNumbers('Flyer', {frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
        });
        this.anims.create({
            key: 'idleflyer',
            frames: this.anims.generateFrameNumbers('Flyer', {frames: [0,1,2,3,4,5,6,7]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'defeatedflyer',
            frames: this.anims.generateFrameNumbers('Flyer', {frames: [0]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'attackcrawler',
            frames: this.anims.generateFrameNumbers('Crawler', {frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
        });
        this.anims.create({
            key: 'idlecrawler',
            frames: this.anims.generateFrameNumbers('Crawler', {frames: [0,1,2,3,4,5,6,7]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'defeatedcrawler',
            frames: this.anims.generateFrameNumbers('Crawler', {frames: [0]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'attackcolossus',
            frames: this.anims.generateFrameNumbers('Colossus', {frames: [8,9,10,11,12,13,14,15]}),
            frameRate: 5,
        });
        this.anims.create({
            key: 'idlecolossus',
            frames: this.anims.generateFrameNumbers('Colossus', {frames: [0,1,2,3,4,5,6,7]}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'defeatedcolossus',
            frames: this.anims.generateFrameNumbers('Colossus', {frames: [0]}),
            frameRate: 5,
            repeat: -1
        });
        this.cursors = this.input.keyboard.addKeys({
            up: 'W',
            down: 'S',
            left: 'A',
            right: 'D'
        });  // keys.up, keys.down, keys.left, keys.right

        //First just create the first player
        this.cat = this.physics.add.sprite(640, 128+64, 'cat', 6);
        this.cat.setBounce(0.1, 0.1);
        this.physics.world.bounds.width = level0.widthInPiexels;
        this.power = 0;

        // don't go out of the map
        this.physics.world.bounds.width = level0.widthInPixels;
        this.physics.world.bounds.height = level0.heightInPixels;
        this.cat.setCollideWorldBounds(true);
        
        this.physics.add.collider(this.cat, blocked);

        // limit camera to map
        this.cameras.main.setBounds(0, 0, level0.widthInPixels, level0.heightInPixels);
        this.cameras.main.startFollow(this.cat);
        this.cameras.main.roundPixels = true; // avoid tile bleed
        this.cat.anims.play('cat', true);
        catAnimations = ['cat', 'catleft', 'catright'];

        this.yune = this.physics.add.sprite(768, 900, 'Yune', 6);
        this.yune.anims.play('rightyune', true);
        unitYuneStats = new unitStats(50, 5, 5, 5, 10);
        yuneAnimations = ['leftyune', 'rightyune', 'attackyune', 'defeatedyune'];
        unitYune = new unitInformation(this.yune, "Yune", yuneAnimations, "yunesprite", null, unitYuneStats, null, null, true);
        this.enemies.push(unitYune);

        //double jumping cat 
        this.physics.world.gravity.y = 600;
        this.doubleJump = false;
        this.doubleJumpTimer = 25;
        this.doubleJumpIndicator = false;


        this.catmeow = ["MEOW!", "MEOWWWWW~!", "NYAN~ NYAN~"];
        bitmaptextmeow = this.add.dynamicBitmapText(550, 500, 'desyrel-pink', 'MEOW!', 80);
        this.physics.world.enable(bitmaptextmeow);
        bitmaptextmeow.setVisible(false);
        bitmaptextmeow.setActive(false);
        bitmaptextmeow.body.setAllowGravity(false);
        bitmaptextmeow.body.setCollideWorldBounds(true);
        bitmaptextmeow.body.onWorldBounds = true;

        
        this.physics.world.on('worldbounds', ()=>{
            bitmaptextmeow.setVisible(false);
            bitmaptextmeow.setActive(false);
        });

        this.input.on("pointerdown", ()=>{
            this.meow();
        })
    },


    wake: function() {
        //this.cat.body.setVelocity(0,0);
        this.cursors.left.reset();
        this.cursors.right.reset();
        this.cursors.up.reset();
        this.cursors.down.reset();
    },

    //So the cat will meow and fire a string of meows that will attack stuff nyan
    //x is the one colliding one is the one being collided on I hope
    meow: function(){
        bitmaptextmeow.setActive(true);
        bitmaptextmeow.setVisible(true);
        bitmaptextmeow.x = this.cat.x;
        bitmaptextmeow.y = this.cat.y;
        pickMeow=  Phaser.Math.RND.between(0, 2);
        bitmaptextmeow.text = this.catmeow[pickMeow]
        this.physics.moveTo(bitmaptextmeow, this.scene.get("WorldScene").input.activePointer.x, 
        this.scene.get("WorldScene").input.activePointer.y, 1000);
    },

    //let's just have a universal collide function that deals with all instances 
    collide: function(x, y){

    },


    //update collision status and stuff, maybe save currentPlayer as a global to keep track of velocity info
    update: function (time, delta)
    {
        //this.cat.body.setVelocity(0);
        if (this.cat.body.onFloor()){
            this.cat.body.setVelocity(0);
        }
        // Horizontal movement
        if (this.cursors.left.isDown)
        {
            this.cat.body.setVelocityX(-550);
        }
        else if (this.cursors.right.isDown)
        {
            this.cat.body.setVelocityX(550);
        }

        if (this.cursors.up.isDown && this.cat.body.onFloor())
        {
            this.cat.body.setVelocityY(-600);
            this.doubleJumpIndicator = true;
        }
        else if (this.cursors.up.isDown && this.doubleJump && !this.cat.body.onFloor()){
            this.cat.body.setVelocityY(-600 - 200);
            this.doubleJump = false;
        }
        else if (this.cursors.down.isDown){
            this.cat.body.setVelocityY(550);
        }
        // Update the animation last and give left/right animations precedence over up/down animations
        if (this.cursors.left.isDown)
        {
            this.cat.anims.play('catleft', true);
            //this.reena.flipX = true;
        }
        else if (this.cursors.right.isDown)
        {
            this.cat.anims.play('catright', true);
            this.cat.flipX = false;
        }
        else if (this.cursors.up.isDown)
        {
            this.cat.anims.play('cat', true);
        }
        else if (this.cursors.down.isDown)
        {
            this.cat.anims.play('cat', true);
        }
        else
        {
            //this.reena.anims.stop();
            //this.cat.body.setVelocity(0);
        }
        
        if (this.doubleJumpIndicator){
            this.doubleJumpTimer--;
        }
        if (this.doubleJumpTimer <= 0){
            this.doubleJump = true;
            this.doubleJumpTimer = 25;
            this.doubleJumpIndicator = false;
        }


    }

});


//defines the respective stats of the units
//Unit skills consist of skill names and a description, and the skillname will be checked to see the skill effect in the battle method
class unitSkills{
    constructor (skillName, description, spriteName)
    {
        this.skillName = skillName;
        this.description = description; //description and skill names are both strings
        this.spriteName = spriteName;
    }
}

//Unit battle information consist of basic stats of a character, each stat represent different things 
class unitStats{
    constructor (HP, ATK, DEF, RES, WEIGHT)
    {
        this.hp = HP;
        this.maxHP = HP;
        this.atk = ATK;
        this.def = DEF;
        this.res = RES;
        this.wt = WEIGHT;
    }
}

//Unit battle information consist of the current status effect on the user
class unitStatus{
    constructor (statusName, statusDescription)
    {
        this.statusName = statusName;
        this.statusDescription = statusDescription;
    }
}

//Unit battle skills information. type can be magic, physical, special, or null.
//target can be single or multi
class unitBattleSkills{
    constructor(battleSkillName, battleSkillDescription, mpRequired, type, target){
        this.battleSkillName = battleSkillName;
        this.battleSkillDescription = battleSkillDescription;
        this.mpRequired = mpRequired;
        this.type = type;
        this.target = target;
    }
}

//This class stores all unit's informations, including sprites, skills, and so on. Stored in a single global array
/*unitData consists of phaser sprite data, unitName is the sprite name reference, Animation is an array of animation strings,
unitSprites is a string that represents a unit's sprite, unitSkills represents a skills class, and battle info represents stats like HP, MP, ATTACK, and such
unitStatus is the unit's current status, such as paralysis, bind, poisoned and such 
*/
class unitInformation {
    constructor (unitData, unitName, unitAnimations, unitSprites, unitSkills, unitStats, unitStatus, unitBattleSkills)
    {
        this.unitData = unitData;
        this.unitName = unitName;
        this.unitAnimations = unitAnimations;
        this.unitSprites = unitSprites;
        this.unitSkills = unitSkills;
        this.unitStats = unitStats;
        this.unitStatus = unitStatus;
        this.unitBattleSkills = unitBattleSkills;
        this.isGuarding = false;
        this.living = true;
    }

}