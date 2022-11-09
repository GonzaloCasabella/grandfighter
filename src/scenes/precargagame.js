import Phaser from 'phaser'


// precarga automatica aescena game.



export default class precargagameScene extends Phaser.Scene {
    buttontransicion
    constructor() {
        super('precarga')
    }

    preload() {


        this.load.image('fondomapa', 'assets/mapa/pantallanegra.png')
        this.load.image('loadingprecarga', 'assets/loadingg.png')
        this.load.image('buttontransicion', 'assets/texturas/botones/cambioescena.png')
        this.load.audio('transicionmusic', 'assets/sonido/sonido menu/transiccion.mp3')
    }


    create() {
        let contexto = this
        this.add.image(400, 300, 'fondomapa')
        this.add.image(560, 555, 'loadingprecarga').setScale(0.6)
        this.transicionmusic = this.sound.add('transicionmusic')
        const buttontransicion = this.add.image(350, 555, 'buttontransicion')



        
        setTimeout(() => {
            this.transicionmusic.play()
            this.scene.start("game")
        }, 5000);
    }


}

