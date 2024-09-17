export type Reader = 'Laser' | 'MagneticHead'

export interface Disk {
  //TODO: Añadir mas si me apetece
  //TODO: Limitar los tipos de los discos a los discos ya creados como tal

  spinDisk(): string
  saveData(): string
  getName(): string
  setName(name: string): void
  getCapacity(): number
  getContent(): string[]
  addContent(content: string): string
  getType(): string
}
