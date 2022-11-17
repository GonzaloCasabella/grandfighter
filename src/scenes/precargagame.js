import Phaser from 'phaser'


// precarga automatica aescena game.



export default class precargagameScene extends Phaser.Scene {
    buttontransicion
    constructor() {
        super('precarga')
    }
    init(data){
        this.data = data
    }

    preload() {


        this.load.image('fondomapanegro', 'assets/mapa/pantallanegra.png')
        this.load.image('powerup', 'assets/texturas/barrapower.png')
        
    }


    create() {
        let contexto = this
        this.add.image(350, 300, 'fondomapanegro')
        this.add.image(480, 300, 'loading').setScale(1)
        this.transicionmusic = this.sound.add('transicionmusic')
        
       


        
        setTimeout(() => {
            this.transicionmusic.play()
             
            this.scene.start("game",this.data)
        }, 5000);
    }


}

