"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDisk = void 0;
class BaseDisk {
    constructor(name) {
        this.name = name;
    }
    spinDisk() {
        return `${this.name} girando...`;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        if (name.length <= 0) {
            console.error('El nombre no puede ser vacio');
            return;
        }
        this.name = name;
    }
}
exports.BaseDisk = BaseDisk;
