import { IBaseDisk } from '../interfaces/baseDisk.interface'

export class BaseDisk implements IBaseDisk {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  spinDisk(): string {
    return `${this.name} girando...`
  }

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    if (name.length <= 0) {
      console.error('El nombre no puede ser vacio')
      return
    }
    this.name = name
  }
}
