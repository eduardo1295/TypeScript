(()=>{
    
    /*class Avenger{
        nombre:string;
        equipo:string;
        nombreReal:string;
        puedePelear:boolean;
        peleasGanadas:number;

        constructor(nombre:string,equipo,nombreReal,puedePelear,peleasGanadas){
            this.nombre = nombre;
            this.equipo = nombre
        }
    }*/

    class Avenger{
        //nombre:string;
        //equipo:string;
        //nombreReal:string;
        //puedePelear:boolean;
        //peleasGanadas:number;

        constructor(public nombre :string,
                    public equipo?:string,
                    public nombreReal?:string,
                    public puedePelear?:boolean,
                    public peleasGanadas:number = 0
            ){
        }
    }
    

    const antman = new Avenger("Antman");

    console.log(antman);

})();




