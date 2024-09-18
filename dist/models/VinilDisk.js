"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VinilDisk = void 0;
const DataBaseDisk_1 = require("./DataBaseDisk");
class VinilDisk extends DataBaseDisk_1.DataBaseDisk {
    constructor(name, capacity, content, type) {
        super(name, capacity, content, type);
    }
}
exports.VinilDisk = VinilDisk;
