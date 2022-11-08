import Phaser from 'phaser'


// Recordatorio:

// precargar e implementar el boton para seleccionar el tiempo de los combates.
// funcionalidad de los botones de "map siguiente y map anterior".
 // boton "Enter" para ir a escenas de game.
// implementar audio y fx


export default class mapaScene extends Phaser.Scene
{

	constructor()
	{
		super('mapa')
	}

    preload(){
        
        
        this.load.image('fondomapa', 'assets/mapa/templogame.png')
        this.load.audio('templosound', 'assets/sonido/ambiente/cueva.mp3')
        this.load.image('botonjugar', 'assets/texturas/botones/enter.png')
        this.load.image('boxname', 'assets/texturas/boxname_personaje.png')
        this.load.image('boxname2', 'assets/texturas/boxname_personaje.png')
        this.load.image('vs', 'assets/texturas/vs.png')
        this.load.image('sellopelea', 'assets/logo.png')
        this.load.image('user', 'assets/id1.png')
        this.load.image('user2', 'assets/id2.png')
        this.load.image('selec timer', 'assets/texturas/botones/boton_timer.png')
        this.load.image('map siguiente', 'assets/texturas/botones/derecha.png')
        this.load.image('map anterior', 'assets/texturas/botones/izquierda.png')
        this.load.image('box_timer', 'assets/texturas/boxtimer.png')
        this.load.audio('fxmapsound', 'assets/sonido/sonido menu/selecmap.mp3')

    }


    create()
    {
        let contexto =this
        this.add.image(400, 300,'fondomapa')
        this.add.image(300, 150, 'boxname').setScale(0.6)
        this.add.image(500, 150, 'boxname2').setScale(0.6)
        this.add.image(400, 145, 'vs').setScale(0.3)
        this.add.image(400, 35, 'sellopelea').setScale(0.3)
        this.add.image(66, 38, 'user').setScale(1)
        this.add.image(500, 38, 'user2').setScale(1)
            let buttonplay = this.add.image(445,560, 'botonjugar' ).setScale(1)
                    let buttonmap = this.add.image(500,210, 'map siguiente' ).setScale(1)
                        let buttonmap2 = this.add.image(300,210, 'map anterior' ).setScale(1)
                        let buttontime = this.add.image(650,210, 'selec timer' ).setScale(1)
                        buttontime.setInteractive().on("pointerup", () => {
                            
                        },this)
        this.add.text
        (530,20, "jugador5000", {
            fontSize:"30px",
            fontStyle: "bold",
            color: "#ffff00",
            
        })
        
        this.add.text
        (371,200, "MAPA", {
        fontSize: "25px",
        fontStyle: "bold",
        color: "#F8F52E"
    
    })
    this.add.text
        (540,200, "TIEMPO", {
        fontSize: "25px",
        fontStyle: "bold",
        color: "#F8F52E"
    
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
        (365,562, "Fight", {
        fontSize: "20px",
        fontStyle: "bold",
        color: "#FDFCE8" 
        
    

    })}
   
   
 
    
} 
       
