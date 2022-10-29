import Phaser from 'phaser'


// funcionalidad de:
// boton de "x", boton "esp", boton " mouse izquierdo, boton "aletario"
// interfaz de los personajes
//implementar audio y fx


export default class selecpersonajeScene extends Phaser.Scene
{
    ingame = "ingame1"
    jugadores_listos=0

	constructor()
	{
		super('selec personajes')
	}

	preload()
    {
        this.load.image('fondoselec', 'assets/ingame.png')
        this.load.image('logo1', 'assets/logo.png')
        this.load.image('insignea', 'assets/logoescenario.png')
        this.load.image('idn1' ,'assets/id1.png')
        this.load.image('idn2','assets/id2.png')
        this.load.image('versus', 'assets/texturas/vs.png')
        this.load.image('box_player1', 'assets/texturas/boxname_personaje.png')
        this.load.image('box_player2', 'assets/texturas/boxname_personaje.png')
        this.load.image('cuadroselec', 'assets/texturas/interfazc.png')
        this.load.image('mouseL', 'assets/texturas/botones/mouseinzquierdo.png')
        this.load.image('mouseR', 'assets/texturas/botones/mousederecho.png')
        this.load.image('Enter', 'assets/texturas/botones/enter.png')
        this.load.image('aleatorio', 'assets/texturas/botones/esp.png')
        this.load.image('x', 'assets/texturas/botones/seleccionar.png')
        this.load.image('cuadro A', 'assets/texturas/interfazS.png')
        this.load.image('hl1', 'assets/personajes/hombrelobo.png')
        this.load.image('hl2', 'assets/personajes/hombreloboP2.png')
        
        
    }
    
    
    
    create()
    {
        let contexto =this
        this.add.image(400, 300, 'fondoselec')
        this.add.image(400, 35, 'insignea').setScale(0.3)
        this.add.image(66, 38, 'idn1').setScale(1)
        this.add.image(500, 38, 'idn2').setScale(1)
        this.add.image(400, 150, 'versus').setScale(0.4)
        this.add.image(280, 150, 'box_player1').setScale(0.6)
        this.add.image(520, 150, 'box_player2').setScale(0.6)
        this.add.image(350, 260, 'hl1').setScale(0.8)
        this.add.image(450, 260, 'hl2').setScale(0.8)
        let interfaz = this.add.image(400, 366, 'cuadroselec').setScale(1)
            let boton3 = this.add.image(663, 560, 'mouseL').setScale(0.3)
                let boton4 = this.add.image(760, 560, 'mouseR').setScale(0.3)
                    let boton7 = this.add.image(460, 560, 'Enter').setScale(1)
                        let boton5 = this.add.image(308, 560, 'aleatorio').setScale(1)
                            let boton6 = this.add.image(140, 560, 'x').setScale(1)
                            let visual = this.add.image(66, 38, 'cuadro A').setScale(1).setOrigin(0)
        this.add.text
        (90,20, "jugador3000", {
            fontSize:"30px",
            fontStyle: "bold",
            color: "#ffff00",
            
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
        (boton6.x-128,560, "Seleccionar" , {
          fontSize: "15px",
          fontStyle: "bold",
          color: "#fdfceb",

        })
        this.add.text
        (545,560, "Seleccionar" , {
          fontSize: "15px",
          fontStyle: "bold",
          color: "#FDFCE8",

        })
        this.add.text
        (boton5.x-130,560, "Azar" , {
          fontSize: "15px",
          fontStyle: "bold",
          color: "#FDFCE8",

        })
        this.add.text
        (705,560, "Azar" , {
          fontSize: "15px",
          fontStyle: "bold",
          color: "#FDFCE8",

        })
        this.add.text
        (530,20, "jugador5000", {
            fontSize:"30px",
            fontStyle: "bold",
            color: "#ffff00",
            
        })
        this.add.text
        (418,582, "Confirmar" , {
          fontSize: "15px",
          fontStyle: "bold",
          color: "#FDFCE8",

        })
        visual.x = interfaz.x-108.5
        visual.y = interfaz.y-164.5
        
        var enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        enter.on("up",()=>{
            this.scene.start("atributo",{fondo:"fondoingame"})
        })
        

    }      
       
}  