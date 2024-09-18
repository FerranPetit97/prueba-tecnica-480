export interface IBaseDisk {
  spinDisk(type: string): string
  getName(): string
  setName(name: string): void
}
