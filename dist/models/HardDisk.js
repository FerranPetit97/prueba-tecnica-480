"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardDisk = void 0;
const DataBaseDisk_1 = require("./DataBaseDisk");
class HardDisk extends DataBaseDisk_1.DataBaseDisk {
    constructor(name, capacity, content, type) {
        super(name, capacity, content, type);
    }
}
exports.HardDisk = HardDisk;
