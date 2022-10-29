import Phaser from 'phaser'


// Funcionalidad de:
// Botones (X y mouse izquierdo) para seleccionarle la habilidad al personaje
// interfaz de personajes
//Implementar audio y fx


export default class atributoScene extends Phaser.Scene
{
    jugadores_listos=0
    fondoingame = "menuingame"

	constructor()
	{
		super('atributo')
	}

    preload(){
        this.load.image('fatributo', 'assets/ingame.png')
        this.load.image('confirmar', 'assets/texturas/botones/enter.png')
        this.load.image('botonmouseL', 'assets/texturas/botones/mouseinzquierdo.png')
        this.load.image('box_nombre', 'assets/texturas/boxname_personaje.png')
        this.load.image('box_nombre2', 'assets/texturas/boxname_personaje.png')
        this.load.image('vsinterfaz', 'assets/texturas/vs.png')
        this.load.image('sello2', 'assets/logoescenario.png')
        this.load.image('iden', 'assets/id1.png')
        this.load.image('iden2', 'assets/id2.png')
        this.load.image('selec', 'assets/texturas/botones/seleccionar.png')
        this.load.image('poder1', 'assets/poderes/fuego ifz.png')
        this.load.image('poder2', 'assets/poderes/magia ifz.png')
        this.load.image('poder3', 'assets/poderes/viento ifz.png')
        this.load.image('poderp1', 'assets/poderes/fuego ifz.png')
        this.load.image('poderp2', 'assets/poderes/magia ifz.png')
        this.load.image('poderp3', 'assets/poderes/viento ifz.png')
        this.load.image('circle A', 'assets/texturas/circulo amarillo.png')
    }

    create()
    {
        let contexto =this
        this.add.image(400, 300, 'fatributo')
            let buttonB = this.add.image(450, 560, 'confirmar').setScale(1)
                let buttonC = this.add.image(735, 560, 'botonmouseL').setScale(0.3)
                    let boton6A = this.add.image(140, 560, 'selec').setScale(1)
        this.add.image(280, 150, 'box_nombre').setScale(0.6)
        this.add.image(520,150, 'box_nombre2').setScale(0.6)
        this.add.image(400, 150, 'vsinterfaz').setScale(0.4)
        this.add.image(400, 35, 'sello2').setScale(0.3)
        this.add.image(66, 38, 'iden').setScale(1)
        this.add.image(500, 35, 'iden2').setScale(1)
            let circle = this.add.image(285, 300, 'poder1').setScale(0.7)
                let circle2 =this.add.image(385, 300, 'poder2').setScale(0.7)
                    let circle3 =this.add.image(490, 300, 'poder3').setScale(0.7)
                        let circle4 =this.add.image(285, 400, 'poderp2').setScale(0.7)
                            let circle5 =this.add.image(385, 400, 'poderp2').setScale(0.7)
                                let circle6 =this.add.image(490, 400, 'poderp3').setScale(0.7)
                                    let visual2 =this.add.image(490, 400, 'circle A').setScale(0.7)
                                    let visual3 =this.add.image(490, 400, 'circle A').setScale(0.7)

        this.add.text
        (90,20, "jugador3000", {
            fontSize:"30px",
            fontStyle: "bold",
            color: "#ffff00",
            
        })
        this.add.text
        (530,20, "jugador5000", {
            fontSize:"30px",
            fontStyle: "bold",
            color: "#ffff00",
            
        })
        this.add.text
        (300,220, "Habilidades", {
        fontSize: "30px",
        fontStyle: "bold",
        color: "#ffff00"
    
    })
    this.add.text
        (245,143, "Wolf-man", {
          fontSize:"15px",
            fontStyle: "bold",
            color: "#220557",
          })
          this.add.text
        (490,143, "Wolf-man", {
          fontSize:"15px",
            fontStyle: "bold",
            color: "#220557",
          })

    this.add.text
    (100,578, "Seleccionar", {
    fontSize: "15px",
    fontStyle: "bold",
    color: "#FDFCE8"

})
this.add.text
        (626,560, "Seleccionar", {
        fontSize: "15px",
        fontStyle: "bold",
        color: "#FDFCE8"
    
    })
    
    this.add.text
        (410,582, "Confirmar", {
        fontSize: "15px",
        fontStyle: "bold",
        color: "#FDFCE8" 
    
    })
    visual2.x = circle.x
    visual2.y = circle.y
    visual3.x = circle6.x
    visual3.y = circle6.y

    var enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        enter.on("up",()=>{
            this.scene.start("mapa",{fondo:"infiernogame"})
        })
    }
    
    
} 
       
