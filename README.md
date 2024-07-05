- **Buscar películas del género "Accion":**
  
  ```javascript
  db.movies.find(
    {genre: {$eq:"Accion"}},
    {name:1,genre:1}
  )
  ```
  
- **Buscar películas con más de 200 copias en formato "Bluray":**
  
  ```javascript
  db.movies.find(
    {"format": {"$elemMatch": {"name": "Bluray","copies": {$gt:200}}}},
    {"name":1, "format.copies":1}
  )
  ```
  
- **Buscar películas donde el valor del formato "dvd" sea menor que 10:**
  
  ```javascript
  db.movies.find(
    {"format": {"$elemMatch": {"name": "dvd","value": {$lt:10}}}},
    {"name":1, "format.value":1}
  )
  ```
  
- **Buscar películas con un personaje apodado "Cobb":**
  
  ```javascript
    db.movies.find(
    {"character.apodo":"Cobb"},
    {"name":1, "character.apodo":1}
  )
  ```
  
- **Buscar películas con actores de id 2 y 3:**
  
  ```javascript
    db.movies.find(
  {"character.id_actor": {$in: [2,3]}},
  {_id:0, name:1, character:1}
  )
  ```
  
- **Buscar películas que tengan el formato "Bluray":**
  
  ```javascript
    db.movies.find(
  {format: {$exists:"Bluray"}},
  {name:1}
  )
  ```
  
- **Buscar películas con el género "Ciencia Ficción":**
  
  ```javascript
  db.movies.find(
    {genre: {$eq: "Ciencia Ficción"}},
    {name: 1}
  );
  ```
  
- **Buscar películas con un rol principal llamado "Miguel":**
  
  ```javascript
  db.movies.find(
    { "character.rol": "principal", "character.apodo": "Miguel" },
    { "name": 1, "character.rol": 1, "character.apodo": 1 }
  );
  ```
  
- **Buscar películas que tengan al menos un formato con más de 100 copias:**
  
  ```javascript
  db.movies.find(
    {"format.copies": {$gt: 100}},
    {"name":1, "format.copies":1}
  )
  ```
  
- **Buscar películas con un actor con id_actor 1:**
  
  ```javascript
   db.movies.find(
  {"character.id_actor": 1},
  {"name":1, "character.id_actor":1}
  )
  ```
  
- **Buscar películas con un personaje principal apodado "Cobb":**
  
  ```javascript
  db.movies.find(
   { "character.rol": "principal", "character.apodo": "Cobb" },
   { "name": 1, "character.rol": 1, "character.apodo": 1 }
  );
  ```
  
- **Buscar películas con más de 200 copias en formato "Bluray":**
  
  ```javascript
  db.movies.find(
  {"format": {"$elemMatch": {"name": "Bluray","copies": {$gt:200}}}},
  {"name":1, "format.copies":1}
  )
  ```
  
- **Buscar películas donde el valor del formato "dvd" sea menor que 10:**
  
  ```javascript
  db.movies.find(
   {"format": {"$elemMatch": {"name": "dvd","value": {$lt:10}}}},
   {"name":1, "format.value":1}
  )
  ```
  
- **Buscar películas con un personaje secundario apodado "Arthur":**
  
  ```javascript
  db.movies.find(
   { "character.rol": "secundario", "character.apodo": "Arthur" },
   { "name": 1, "character.rol": 1, "character.apodo": 1 }
  );
  ```
  
- **Buscar películas con un rol principal y un apodo "Miguel":**
  
  ```javascript
  db.movies.find(
   { "character.rol": "principal", "character.apodo": "Miguel" },
   { "name": 1, "character.rol": 1, "character.apodo": 1 }
  );
  ```