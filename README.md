# Cuenta de mongoDB:

**ederlg2021@gmail.com**

[Video](https://www.youtube.com/watch?v=0PSIF5yQEL4&list=PLW2jH1vzz-mpYAA9tKVr9FrnYJxJyFgfA&index=19)

\***_Conexion a MongoDB con javascript _**

```js
const user = "PrimerUser";
const pass = "W1zAlszE41O66gCN";
const host = "cluster0.3jbmruv.mongodb.net";
const database = "messege";
const uri = `mongodb+srv://${user}:${pass}@${host}/${database}?retryWrites=true&w=majority`;
```

REFERENCIADO

[GET_message](http://localhost:3000/message/)

```json
// INPUT: Sin parámetros

// OUTPUT:
{
  "error": false,
  "mensaje": [
    {
      "_id": "63a359c0fab3506837f328d4",
      "user": "63a359aafab3506837f328cb",
      "message": "Entidad relacionada",
      "date": "2022-12-21T19:08:48.152Z",
      "__v": 0
    }
  ],
  "body": {},
  "method": "GET"
}
```

[POST_message](http://localhost:3000/message/)

```json
// INPUT
{
	"user": "63a359aafab3506837f328cb",
	"message":"Entidad relacionada"
}

//OUTPUT
{
	"error": false,
	"mensaje": {
		"user": "63a359aafab3506837f328cb",
		"message": "Entidad relacionada",
		"date": "2022-12-21T19:08:48.152Z"
	},
	"body": {
		"user": "63a359aafab3506837f328cb",
		"message": "Entidad relacionada"
	},
	"method": "POST"
}
```

_POPULADO_
Simplemente lo une con el campo

[POST_message](http://localhost:3000/message/)

```json
// INPUT
{
	"user": "63a359aafab3506837f328cb",
	"message":"Entidad relacionada"
}

//OUTPUT
{
	"error": false,
	"mensaje": {
		"user": "63a359aafab3506837f328cb",
		"message": "Entidad relacionada",
		"date": "2022-12-21T19:08:48.152Z"
	},
	"body": {
		"user": "63a359aafab3506837f328cb",
		"message": "Entidad relacionada"
	},
	"method": "POST"
}
```
