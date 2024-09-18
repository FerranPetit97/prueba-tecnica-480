"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseDisk = void 0;
const BaseDisk_1 = require("./BaseDisk");
class DataBaseDisk extends BaseDisk_1.BaseDisk {
    constructor(name, capacity, content, type) {
        super(name);
        this.capacity = capacity;
        this.content = content;
        this.type = type;
        this.allContent = [];
        this.nick = this.getName();
    }
    saveData() {
        if (this.content.length <= 0) {
            return 'Se debe proporcionar un contenido para inicilizar';
        }
        this.addContent(this.content);
        return `${this.nick} inicializado`;
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
    getInfo() {
        return {
            name: this.getName(),
            capacity: this.getCapacity(),
            allContent: this.getContent(),
            type: this.getType(),
        };
    }
}
exports.DataBaseDisk = DataBaseDisk;
