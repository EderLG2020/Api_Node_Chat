# Api de un chat en tiempo real

Aplicacion inspirada en los cursos de `Platzi` se realizo una api para el envio de mensaje en tiempo real.

## Tech Stack

**Server:** Node, Express

**Database:** MongoDB

## API Reference

### **USER**

#### Crear user

```http
  POST /user
```

| Parámetro | Tipo     | Descripción                      |
| :-------- | :------- | :------------------------------- |
| `name`    | `String` | **Required**. Nombre del usuario |

#### Listar user

```http
  GET /user
```

| Parámetro | Tipo   | Descripción              |
| :-------- | :----- | :----------------------- |
| `--- `    | ` ---` | Lista todos los usuarios |

#### Eliminar user

```http
  DELETE /user/63a356cb684b69139e2281ea
```

| Parámetro | Tipo   | Descripción        |
| :-------- | :----- | :----------------- |
| `--- `    | ` ---` | Elimina el usuario |

#### Editar user

```http
  PATCH /user/63a356cb684b69139e2281ea
```

| Parámetro | Tipo      | Descripción                  |
| :-------- | :-------- | :--------------------------- |
| `name `   | ` String` | Cambia el nombre del usuario |

### **CHAT**

#### Crear Chat

```http
  POST /chat
```

| Parámetro | Tipo    | Descripción                                                                                                               |
| :-------- | :------ | :------------------------------------------------------------------------------------------------------------------------ |
| `users`   | `Array` | **Required** Se envia un array con el id de cada usuario como **63af7b945ab578615e9aacb3** y **63af7bcf5ab578615e9aacb5** |

#### Listar Chat

```http
  GET /chat/63af7b945ab578615e9aacb3
```

| Parámetro | Tipo  | Descripción                                             |
| :-------- | :---- | :------------------------------------------------------ |
| `---`     | `---` | Lista los chat's en donde el id usuario este registrado |

### **MESSAGE**

#### Crear Message

```http
  POST /message
```

| Parámetro | Tipo       | Descripción                                                        |
| :-------- | :--------- | :----------------------------------------------------------------- |
| `chat  `  | `String`   | **Required** Se envia el **id** del chat en el que esta el usuario |
| `user   ` | `ObjectId` | **Required** Se envia el **id** del usuario                        |
| `message` | `String`   | **Required** Se envia el mensaje para el otro suaurio              |
| `file `   | `String`   | **Required** Se carga una imagen                                   |

#### Listar Message

```http
  GET /message/?user=63af7b945ab578615e9aacb3
```

| Parámetro | Tipo    | Descripción                               |
| :-------- | :------ | :---------------------------------------- |
| `- - -`   | `- - -` | Lista todos los mensajes solo del usuario |

#### Listar todos los Message's

```http
  GET /message/
```

| Parámetro | Tipo    | Descripción                              |
| :-------- | :------ | :--------------------------------------- |
| `- - -`   | `- - -` | Lista todos los mensajes de los usuarios |

#### Editar mensaje

```http
  PATCH /message/63a240996b1e9c3cf6310a78
```

| Parámetro | Tipo     | Descripción                                                                         |
| :-------- | :------- | :---------------------------------------------------------------------------------- |
| `text`    | `String` | Texto con el que se cambiara el mensaje anterior, en url se envia el id del mensaje |

#### Eliminar mensaje

```http
  PATCH /message/63a2469959ad52b7120f896c
```

| Parámetro | Tipo    | Descripción                                                |
| :-------- | :------ | :--------------------------------------------------------- |
| ` - - -`  | `- - -` | Se elimina el mensaje, en la ur se envia el id del mensaje |

## Screenshots

**Plataforma de MongoDB**

![Plataforma de MongoDB](https://i.ibb.co/6vwtGd3/mongo-DB-Eder.png)

**Creando user**

![Post_user](https://i.ibb.co/GkDxXC5/User-Post.png)

**Listando todos los mensajes**

![get_message](https://i.ibb.co/DYzW0Tq/Message-Get.png)

**Creando un nuevo mensaje**

![Post_message](https://i.ibb.co/1KXb6hZ/Message-Post.png)

**Creando un nuevo chat**

![Post_chat](https://i.ibb.co/K2yT4jP/Chat-Post.png)

## Variables de entorno

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env

`USER` = "Usuario que tiene acceso a la base de datos"

`PASS` = "Contraseña del usuario"

`HOST` = "Nombre del clouster de MongoDB"

`DATABASE` = "Nombre de la base de datos"

`PORT` = Puerto en que se ejecutara en el servidor

## Run Locally

Clonar el proyecto

```bash
  git clone https://github.com/EderLG2020/Api_Node_Chat
```

Ir al directorio del proyecto

```bash
  cd Api_Node_Chat
```

Instalar dependencias

```bash
  npm install
```

Inicie el servidor

```bash
  npm run dev
```

## Feedback

Si tiene algún comentario, comuníquese conmigo ederlg2021@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)
