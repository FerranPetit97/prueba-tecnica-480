export type Reader = 'Laser' | 'MagneticHead'

export interface DiskInfo {
  name: string
  capacity: number
  allContent: string[]
  type: Reader
}

export interface IDataBaseDisk {
  spinDisk(type: string): string
  saveData(): string
  getName(): string
  setName(name: string): void
  getCapacity(): number
  getContent(): string[]
  addContent(content: string): string
  getType(): string
  getInfo(): DiskInfo
}
