import Phaser from 'phaser'






export default class selecidiomaScene extends Phaser.Scene
{

	constructor()
	{
		super('idioma')
	}

    preload(){

        this.load.image('fondoidioma', 'assets/fondoregistro.png')
        this.load.image('caja', 'assets/pantalla.png')
        this.load.image('español', 'assets/banderamex.png')
        this.load.image('ingles', 'assets/england1.png')
        this.load.image('italiano', 'assets/banderaITA.png')
        this.load.audio('fuego', 'assets/sonido/sonido menu/fuegosonido.mp3')
    }

        

    

    create()
    {
        console.log("idiomas")
        let contexto =this
        this.backgroundMusic = this.sound.add('soundtrack')
        this.backgroundMusic.play();
        this.soundbutton = this.sound.add('soundbutton')
        this.add.image(400, 300, 'fondoidioma')
        this.backgroundambiente = this.sound.add('fuego')
        this.backgroundambiente.play();

        this.add.image(400, 300, 'caja').setScale(1.5)
         this.load.image('caja', 'assets/pantalla.png')
            let botonmex = this.add.image(300, 250, 'español').setScale(0.4)
            let botoneng = this.add.image(500, 250, 'ingles').setScale(0.4)
            let botonita = this.add.image(400, 370, 'italiano').setScale(0.4)

        this.add.text
        (260,135, "seleccione idioma",{
            fontSize: "25px",
            fontStyle: "bold",
            color: "#F6F4D4"
        })
        
            
        botonmex.setInteractive().on("pointerup", () => {
            this.soundbutton.play()
            this.backgroundMusic.stop()
            this.backgroundambiente.stop()
            this.scene.start("carga")
        },this)

        botoneng.setInteractive().on("pointerup", () => {
            this.soundbutton.play()
            this.backgroundMusic.stop()
            this.backgroundambiente.stop()
            this.scene.start("carga")
        },this)

        botonita.setInteractive().on("pointerup", () => {
            this.soundbutton.play()
            this.backgroundMusic.stop()
            this.backgroundambiente.stop()
            this.scene.start("carga")
        },this)


        
    }
        
    
    
}
