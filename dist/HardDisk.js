"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardDisk = void 0;
class HardDisk {
    constructor(name, capacity, content, type) {
        this.name = name;
        this.capacity = capacity;
        this.content = content;
        this.type = type;
        this.allContent = [];
    }
    spinDisk() {
        return 'Disco duro esta girando';
    }
    saveData() {
        if (this.content.length <= 0) {
            return 'Se debe proporcionar un contenido para inicilizar';
        }
        this.addContent(this.content);
        return 'Disco duro inicializado';
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
    getCapacity() {
        return this.capacity;
    }
    getContent() {
        return this.allContent;
    }
    addContent(content) {
        this.allContent.push(content);
        return 'La información ha sido añadida';
    }
    getType() {
        return this.type;
    }
}
exports.HardDisk = HardDisk;
