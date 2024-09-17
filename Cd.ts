import { Disk, Reader } from './disk.interface'

export class Cd implements Disk {
  private name: string
  private capacity: number
  private content: string
  private allContent: string[]
  private type: string

  constructor(name: string, capacity: number, content: string, type: Reader) {
    this.name = name
    this.capacity = capacity
    this.content = content
    this.type = type
    this.allContent = []
  }

  spinDisk(): string {
    return 'CD está girando'
  }

  saveData(): string {
    if (this.content.length <= 0) {
      return 'Se debe proporcionar un contenido para inicilizar'
    }

    this.addContent(this.content)

    return 'CD inicializado'
  }

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    if (name.length <= 0) {
      console.error('El nombre no puede estar vacio')
      return
    }
    this.name = name
  }

  getCapacity(): number {
    return this.capacity
  }

  getContent(): string[] {
    return this.allContent
  }

  addContent(content: string): string {
    this.allContent.push(content)
    return 'La información ha sido añadida'
  }

  getType(): string {
    return this.type
  }
}
