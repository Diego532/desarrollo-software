function multiplicar(uno:number, dos:number){
    return uno * dos;
}

multiplicar(5,5);

interface Respuesta<T> {
    type: String,
    success: boolean,
    message: T,
}

let payload: Respuesta<String> = {
    type:'post',
    success: true,
    message: 'Hola Bebe'

}

let payload2: Respuesta<boolean> = {
    type: 'Get',
    success: false,
    message: true
}

// Genericos en funciones.
type Nota = {mensaje:string}
type NotaColorida = Nota & {color:string}
type Foto = {url: string}
type Video = Foto & {duracion: number}

type Publicacion = Nota | NotaColorida | Foto | Video

// HTTP POST /upload

function subir (p: Publicacion){
    // en este caso se tienen que hacer checks para ver si la publicacion es una nota o notacolorida etc...
    // se quieren restringir tus tipos 
}

// Vamos a utilizar ahora tipos parametrizados...
function upload<publication>(p: publication): publication{
    return p;
}

let post : Nota = {mensaje: 'Hola mundo'};
let newNote = upload(post); // se esta usando la inferencia de tipos
console.log(newNote.mensaje);