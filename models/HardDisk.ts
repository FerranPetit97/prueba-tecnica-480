import { DataBaseDisk } from './DataBaseDisk'
import { Reader } from '../interfaces/dataBaseDisk.interface'

export class HardDisk extends DataBaseDisk {
  constructor(name: string, capacity: number, content: string, type: Reader) {
    super(name, capacity, content, type)
  }
}
