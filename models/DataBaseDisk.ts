import { BaseDisk } from './BaseDisk'
import {
  IDataBaseDisk,
  DiskInfo,
  Reader,
} from '../interfaces/dataBaseDisk.interface'

export class DataBaseDisk extends BaseDisk implements IDataBaseDisk {
  private nick: string
  private capacity: number
  private content: string
  private allContent: string[]
  private type: Reader

  constructor(name: string, capacity: number, content: string, type: Reader) {
    super(name)
    this.capacity = capacity
    this.content = content
    this.type = type
    this.allContent = []
    this.nick = this.getName()
  }

  saveData(): string {
    if (this.content.length <= 0) {
      return 'Se debe proporcionar un contenido para inicilizar'
    }

    this.addContent(this.content)

    return `${this.nick} inicializado`
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

  getType(): Reader {
    return this.type
  }

  getInfo(): DiskInfo {
    return {
      name: this.getName(),
      capacity: this.getCapacity(),
      allContent: this.getContent(),
      type: this.getType(),
    }
  }
}
