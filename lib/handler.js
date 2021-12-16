"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnedError = void 0;
class ReturnedError extends Error {
    constructor(wrapped) {
        super();
        this.wrapped = wrapped;
    }
}
exports.ReturnedError = ReturnedError;
