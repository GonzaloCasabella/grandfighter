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
        this.load.image('caja', 'assets/pantalla.png')
    }

        

    

    create()
    {
        let contexto =this
        this.add.image(400, 300, 'fondoidioma')
        this.add.image(400, 300, 'caja').setScale(1.5)
        

        this.add.text
        (700,560, "cargando...",{
            fontSize: "15px",
            fontStyle: "bold",
            color: "#F6F4D4"
        })
            

        
    }
        
    
    
}
