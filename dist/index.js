"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cd_1 = require("./Cd");
const HardDisk_1 = require("./HardDisk");
// Inicializar un objeto de HardDisk
const myHardDisk = new HardDisk_1.HardDisk('MyDisk', 500, 'Initial Content', 'MagneticHead');
// Ejecutar métodos
console.log(myHardDisk.spinDisk());
console.log(myHardDisk.saveData());
console.log(myHardDisk.getName());
console.log(myHardDisk.getCapacity());
console.log(myHardDisk.getContent());
console.log(myHardDisk.addContent('New Data'));
console.log(myHardDisk.getContent());
console.log(myHardDisk.getType());
// Modificar el nombre del disco
myHardDisk.setName('UpdatedDisk');
console.log(myHardDisk.getName());
const myCD = new Cd_1.Cd('MyDisk', 500, 'Initial Content', 'Laser');
// Ejecutar métodos
console.log(myCD.spinDisk());
console.log(myCD.saveData());
console.log(myCD.getName());
console.log(myCD.getCapacity());
console.log(myCD.getContent());
console.log(myCD.addContent('New Data'));
console.log(myCD.getContent());
console.log(myCD.getType());
// Modificar el nombre del disco
myCD.setName('UpdatedDisk');
console.log(myCD.getName());
