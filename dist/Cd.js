"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cd = void 0;
class Cd {
    constructor(name, capacity, content, type) {
        this.name = name;
        this.capacity = capacity;
        this.content = content;
        this.type = type;
        this.allContent = [];
    }
    spinDisk() {
        return 'CD está girando';
    }
    saveData() {
        if (this.content.length <= 0) {
            return 'Se debe proporcionar un contenido para inicilizar';
        }
        this.addContent(this.content);
        return 'CD inicializado';
    }
    getName() {
        return this.name;
    }
    setName(name) {
        if (name.length <= 0) {
            console.error('El nombre no puede estar vacio');
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
exports.Cd = Cd;
