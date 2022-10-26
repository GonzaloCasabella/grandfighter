import Phaser from 'phaser'


// implementar el listado de idiomas
//implementar audio y fx


export default class selecidiomaScene extends Phaser.Scene
{

	constructor()
	{
		super('idioma')
	}

    preload(){

        this.load.image('fondoidioma', 'assets/fondoregistro.png')
        this.load.image('buttontext', 'assets/texturas/botones/entertext1.png')

    }

        

    

    create()
    {
        let contexto =this
        this.add.image(400, 300, 'fondoidioma')
        this.add.image(400, 300, 'caja').setScale(1.5)
         this.load.image('caja', 'assets/pantalla.png')
            let botontext = this.add.image(400, 460, 'botontext').setScale(1)

        this.add.text
        (238,120, "seleccione idioma",{
            fontSize: "20px",
            fontStyle: "bold",
            color: "#F6F4D4"
        })
        this.add.text
        (238,135, "Español neutro",{
            fontSize: "15px",
            fontStyle: "bold",
            color: "#F6F4D4"
        })
        this.add.text
        (238,145, "Ingles (Usa)",{
            fontSize: "15px",
            fontStyle: "bold",
            color: "#F6F4D4"
        })
        this.add.text
        (238,160, "Italiano",{
            fontSize: "15px",
            fontStyle: "bold",
            color: "#F6F4D4"
        })
            

        
    }
        
    
    
}
