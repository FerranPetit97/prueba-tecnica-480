"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueRay = void 0;
const DataBaseDisk_1 = require("./DataBaseDisk");
class BlueRay extends DataBaseDisk_1.DataBaseDisk {
    constructor(name, capacity, content, type) {
        super(name, capacity, content, type);
    }
}
exports.BlueRay = BlueRay;
