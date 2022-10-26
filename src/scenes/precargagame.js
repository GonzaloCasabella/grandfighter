import Phaser from 'phaser'


// implementar el "Loading"
//implementar audio y fx


export default class precargagameScene extends Phaser.Scene
{

	constructor()
	{
		super('precarga')
	}

    preload(){

        this.load.image('loading', 'assets/loadingg.png')
        this.load.image('pantallacarga', 'assets//mapa/pantallanegra.png')
    }

        

    

    create()
    {
        let contexto =this
        this.add.image(400, 300, this.fondocarga)
        this.add.image(500, 300, 'loading').setScale(1)
        const boton = this.add.image(400, 550, 'botonescena')

        this.add.text
        (700,560, "cargando...",{
            fontSize: "15px",
            fontStyle: "bold",
            color: "#F6F4D4"
        })
            

        
    }
        
    
    
}
