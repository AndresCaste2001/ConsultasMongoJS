import { connect } from "../../helpers/db/connect.js";


export class movis extends connect {
    static instance; 
    constructor() {
        if(typeof movis.instance === "object") {
            return movis.instance;
        }
        super();
        this.collection = this.db.collection("movis");
        movis.instance = this;
        return this;
    }


// gettin all the movies name //
    async getAllMovis(){
        let res = await this.collection.aggregate([
            {
                $project: {
                    name:0
                }
            }

        ]).toArray();
        return res
    }
// - **Buscar películas del género "Accion":**
    async getAccionMovies(){
    let res = await this.collection.find(
        {genre:{$eq:"Accion"}},
        {projection:{name:1,genre:1}}).toArray();
        return res;
    }

 //   - **Buscar películas con más de 200 copias en formato "Bluray":**
    async getBlurayMoviesOver200(){
        let res = await this.collection.find(
            {"format": {"$elemMatch": {"name": "Bluray","copies":{$gt:200}}}},
            {projection: {"name":1, "format.copies":1}}
        ).toArray();
        return res;
    }

 //- **Buscar películas donde el valor del formato "dvd" sea menor que 10:**
 
    async getDVDMoviesLower10(){
        let res = await this.collection.find(
            {"format": {"$elemMatch": {"name": "dvd","value":{$lt:10}}}},
            {projection: {"name":1, "format.value":1}}
        ).toArray();
        return res;
    }
 //- **Buscar películas con un personaje apodado "Cobb":**

    async getMoviswithCobb(){
        let res = await this.collection.find(
            {"character.apodo":"Cobb"},
            {projection: {"name":1, "character.apodo":1}}
        ).toArray()
        return res;
    }

// - **Buscar películas con actores de id 2 y 3:**

    async getMoviesWithActors2and3(){
        let res = await this.collection.find(
            {"character.id_actor": {$in: [2,3]}},
            {projection: {_id:0, name:1, character:1}}
        ).toArray();
        return res;
    }

//- **Buscar películas que tengan el formato "Bluray":**

    async getMoviesWithBluray(){
        let res = await this.collection.find(
            {"format": {"$elemMatch": {"name": "Bluray"}}},
            {projection: {"name":1, "format.name":1}}
        ).toArray();
        return res;
    }

// - **Buscar películas con el género "Ciencia Ficción":**

    async getCienciaFiccionMovies(){
        let res = await this.collection.find(
            {genre: {$eq: "Ciencia Ficción"}},
            {projection: {"name":1, "genre":1}}
        ).toArray();
        return res;
    }

//- **Buscar películas con un rol principal llamado "Miguel":**

    async getMoviesWithMiguel(){
        let res = await this.collection.find(
            { "character.rol": "principal", "character.apodo": "Miguel" },
            {projection: { "name": 1, "character.rol": 1, "character.apodo": 1 }}
        ).toArray();
        return res;
    }
//- **Buscar películas que tengan al menos un formato con más de 100 copias:**

    async getMoviesWithMoreThan100Copies(){
        let res = await this.collection.find(
            {"format.copies": {$gt: 100}},
            {projection: {"name":1, "format.copies":1}}
        ).toArray();
        return res;
    }

//- **Buscar películas con un actor con id_actor 1:**

    async getMoviesWithActor1(){
        let res = await this.collection.find(
            {"character.id_actor": 1},
            {projection: {"name":1, "character.id_actor":1}}
        ).toArray();
        return res;
    }

//    - **Buscar películas con un personaje principal apodado "Cobb":**

    async getMovisWithMainCobb(){
        let res = await this.collection.find(
            {"character.rol": "principal", "character.apodo": "Cobb"},
            {projection: {"name":1, "character.rol":1, "character.apodo":1}}
        ).toArray();
        return res;
    }

//- **Buscar películas con un personaje secundario apodado "Arthur":**

    async getMoviesWithSecondaryArthur(){
        let res = await this.collection.find(
            {"character.rol": "secundario", "character.apodo": "Arthur"},
            {projection: {"name":1, "character.rol":1, "character.apodo":1}}
        ).toArray();
        return res;
    }as



}

  
