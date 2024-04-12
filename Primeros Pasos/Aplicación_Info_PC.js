const os = require('node:os')
const { uptime } = require('node:process')


console.log('Información del sistema operativo:')
console.log('-----------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus())
console.log('Memoria Libre', os.freemem() /1024 /1024)
console.log('Memoria Total', os.totalmem() /1024 /1024)
console.log('Tiempo que lleva el ordenador encendido', uptime())