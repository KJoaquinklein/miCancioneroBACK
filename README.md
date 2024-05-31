# miCancioneroBACK

Backend de aplicacion "mi cancionero"

<hr/>

Rutas:

<ul>
    <li>/user:  GET trae el usuario con toda su informacion, POST crea un nuevo usuario con nombre y contraseña</li>
    <li>/login: Da acceso a un usuario ya regristrado</li>
    <li>/song: Permite crear una nueva cancion</li>
</ul>

La informacion de usuario llega de la siguiente manera:

{
username: "",
songs: {
title: "",
author: "",
sections: [
{
type: "Estrofa",
verses: ["", "", "", ""]
},
{
type: "Estrofa",
verses: ["", "", "", ""]
},
{
type: "Estribillo",
verses: ["", "", "", ""]
},
{
type: "Estrofa",
verses: ["", "", "", ""]
},
]
}
}
