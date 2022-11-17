import Phaser from 'phaser'


// implementar textos
//implementar boton de reinicio



export default class creditosScene extends Phaser.Scene {

    constructor() {
        super('creditos')
    }

    preload() {

        this.load.image('menucreditos', 'assets/mapa/pantallanegra.png')
        
        this.load.image('botonR', 'assets/texturas/botones/reiniciar.png')
    }





    create() {
        let contexto = this
        this.add.image(400, 300, 'menucreditos')
        const botonR = this.add.image(400, 580, 'botonR')
        
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
        
            this.scene.start("selec personajes")
        },this)

        }
        
    }
        
        

   
    



