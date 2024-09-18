"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cd = void 0;
const DataBaseDisk_1 = require("./DataBaseDisk");
class Cd extends DataBaseDisk_1.DataBaseDisk {
    constructor(name, capacity, content, type) {
        super(name, capacity, content, type);
    }
}
exports.Cd = Cd;
