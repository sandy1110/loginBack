<a href="https://gitmoji.dev">
  <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
</a>

# Prueba Tecnica Para Stack-Vault

Back End con NodeJs

## Instalacion

1. Clonar repositorio ` https://github.com/hitzu/Stack-Vault-poker-game-Server.git `
2. Instalar todas las dependencias con ` npm install `
3. Levantar el servidor con ` npm start `
4. IMPORTANTE: colocar el archivo `  .env.dev ` que se anexa en el correo electronico ya que es la conexion a mongo atlas y permite obtener los datos de la base de datos.

## Uso

Las peticiones a los recursos de la api son consumidas en 

`  http://localhost:8080/ `
## Arquitectura del sistema

La prueba tecnica utiliza una arquitectura modelo vista controlador 

1. Modelo: carpeta ` models ` aqui se guardan todos los archivos de descripcion de los modelos de las bases de datos.
2. Vista: carpeta ` routes ` almacena los archivos que describen las rutas para consumir los recursos de la api.
3. Controlador: carpeta ` controllers ` contiene los archivos de los metodos que se ejecutan para devolver los recursos solicitados por los clientes

## Apis disponibles

### Creacion de carta

``` POST /cards
REQUEST
{
    "url" : "https://svquizz.s3.eu-central-1.amazonaws.com/2D.jpg",
    "type" : "rombo",
    "number" : 2 
} 

RESPONSE
{
    "active": true,
    "_id": "600e5eb016043728776c5ad6",
    "url": "https://svquizz.s3.eu-central-1.amazonaws.com/2D.jpg",
    "type": "rombo",
    "number": "2",
    "__v": 0
}

```
### Obtener todas las cartas

``` GET /cards
RESPONSE
[
    {
        "active": true,
        "_id": "600e5beac6c0661f7f327bc0",
        "url": "https://svquizz.s3.eu-central-1.amazonaws.com/2C.jpg",
        "type": "trebol",
        "number": "2",
        "__v": 0
    },
    {
        "active": true,
        "_id": "600e5eb016043728776c5ad6",
        "url": "https://svquizz.s3.eu-central-1.amazonaws.com/2D.jpg",
        "type": "rombo",
        "number": "2",
        "__v": 0
    }
]
```

### Obtener carta por id
``` GET /cards/:idCard
REQUEST 
/cards/600e5beac6c0661f7f327bc0

RESPONSE
{
    "_id": "600e5beac6c0661f7f327bc0",
    "url": "https://svquizz.s3.eu-central-1.amazonaws.com/2C.jpg",
    "type": "trebol",
    "number": "2",
    "__v": 0
}
```

### Actualizar carta por id
``` Put /cards/:idCard
REQUEST 
/cards/600e5beac6c0661f7f327bc0
{
    "url" : "https://svquizz.s3.eu-central-1.amazonaws.com/2C.jpg",
    "type" : "rombo",
    "number" : 2,
    "active" : true
}

RESPONSE
{
    "_id": "600e5beac6c0661f7f327bc0",
    "url": "https://svquizz.s3.eu-central-1.amazonaws.com/2C.jpg",
    "type": "rombo",
    "number": "2",
    "__v": 0
}
```

### Borrado logico
``` Delete /cards/:idCard
REQUEST 
/cards/600e5beac6c0661f7f327bc0

RESPONSE
{
    "active": false,
    "_id": "600e5beac6c0661f7f327bc0",
    "url": "https://svquizz.s3.eu-central-1.amazonaws.com/2C.jpg",
    "type": "trebol",
    "number": "2",
    "__v": 0
}
```
## License
[MIT](https://choosealicense.com/licenses/mit/)