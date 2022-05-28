function multiplicar(uno, dos) {
    return uno * dos;
}
multiplicar(5, 5);
var payload = {
    type: 'post',
    success: true,
    message: 'Hola Bebe'
};
var payload2 = {
    type: 'Get',
    success: false,
    message: true
};
// HTTP POST /upload
function subir(p) {
    // en este caso se tienen que hacer checks para ver si la publicacion es una nota o notacolorida etc...
    // se quieren restringir tus tipos 
}
// Vamos a utilizar ahora tipos parametrizados...
function upload(p) {
    return p;
}
var post = { mensaje: 'Hola mundo' };
var newNote = upload(post); // se esta usando la inferencia de tipos
console.log(newNote.mensaje);
