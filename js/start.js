var config = {
    type: Phaser.GRAPHICS,
    parent: 'content',
    width: 2048,
    height: 1280,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            friction: {y: 1, x: 1},
            debug: false // set to true to view zones
        }
    },
    scene: [
        BootScene,
        WorldScene,
    ]
};
var game = new Phaser.Game(config);

