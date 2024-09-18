import { Cd } from '../models/Cd'
import { HardDisk } from '../models/HardDisk'

export function init() {
  // Inicializar un objeto de HardDisk
  const myHardDisk = new HardDisk(
    'MyDisk',
    500,
    'Initial Content',
    'MagneticHead'
  )

  // Ejecutar métodos
  console.log(myHardDisk.spinDisk())
  console.log(myHardDisk.saveData())
  console.log(myHardDisk.getInfo())
  console.log(myHardDisk.addContent('New Data'))
  console.log(myHardDisk.getInfo())

  // Modificar el nombre del disco
  myHardDisk.setName('UpdatedDisk')
  console.log(myHardDisk.getName())

  const myCD = new Cd('MyDisk', 500, 'Initial Content', 'Laser')

  // Ejecutar métodos
  console.log(myCD.spinDisk())
  console.log(myCD.saveData())
  console.log(myCD.getInfo())
  console.log(myCD.addContent('New Data'))
  console.log(myCD.getInfo())

  // Modificar el nombre del disco
  myCD.setName('UpdatedDisk')
  console.log(myCD.getName())
}
