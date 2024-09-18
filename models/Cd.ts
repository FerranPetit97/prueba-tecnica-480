import { DataBaseDisk } from './DataBaseDisk'
import { Reader } from '../interfaces/dataBaseDisk.interface'

export class Cd extends DataBaseDisk {
  constructor(name: string, capacity: number, content: string, type: Reader) {
    super(name, capacity, content, type)
  }
}
