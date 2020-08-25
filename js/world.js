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
        this.load.image('tiles', 'assets/map/Mapset.png');
        this.load.image('tiles2', 'assets/map/Mapset2.png');
        
        // map in json format
        this.load.tilemapTiledJSON('level0', 'assets/map/level0.json');
        this.load.tilemapTiledJSON('level1', 'assets/map/level1.json');
        this.load.tilemapTiledJSON('level2', 'assets/map/level2.json');
        this.load.tilemapTiledJSON('level3', 'assets/map/level3.json');
        this.load.tilemapTiledJSON('level4', 'assets/map/level4.json');
        this.load.tilemapTiledJSON('level5', 'assets/map/level5.json');
        this.load.tilemapTiledJSON('level6', 'assets/map/level6.json');
        this.load.tilemapTiledJSON('level7', 'assets/map/level7.json');
        
        // enemies
        this.load.image("dragonblue", "assets/dragonblue.png");
        this.load.image("dragonorrange", "assets/dragonorrange.png");
        
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
            this.scene.start('DialogScene');
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
        var level0 = this.make.tilemap({ key: 'level0' });
        
        // first parameter is the name of the tilemap in tiled
        var tiles = level0.addTilesetImage('Mapset', 'tiles');
        
        // creating the layers
        var traverse = level0.createStaticLayer('traverse', tiles, 0, 0);
        var blocked = level0.createStaticLayer('blocked', tiles, 0, 0);
        
        // make all tiles in obstacles collidable
        blocked.setCollisionByExclusion([-1]);

        //list of global attributes that the current player has 

        var animations = []; //a string of animations being stored 

        //conversations array;


        
        //  animation with key 'left', we don't need left and right as we will use one and flip the sprite
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
    },

});
