import Phaser from 'phaser'


// implementar textos
//implementar boton de reinicio



export default class creditosScene extends Phaser.Scene {

    constructor() {
        super('creditos')
    }

    preload() {

        this.load.image('menucreditos', 'assets/mapa/pantallanegra.png')
        this.load.audio('soundcreditos', 'assets/sonido/sonido menu/finish.mp3')
        this.load.image('botonR', 'assets/texturas/botones/reiniciar.png')
    }





    create() {
        let contexto = this
        this.add.image(400, 300, 'menucreditod')
        this.soundcreditos = this.sound.add('soundcreditos')
        const botonR = this.add.image(400, 580, 'botonR')
        this.soundcreditos = this.sound.add('soundcreditos')
        this.soundcreditos.play();
        this.soundbutton = this.sound.add('soundbutton')

        this.tweens.add({
            targets: botonR, 
            scale: 1.2,
            ease: "Linear",
            duration: 500,
            repeat: -1,
            yoyo: true
        })
        botonR.setInteractive().on("pointerup", () => {
            this.soundbutton.play();
            this.soundcreditos.stop();
            this.scene.start("selec personajes")
        },this)

        }
        
    }
        
        

   
    



