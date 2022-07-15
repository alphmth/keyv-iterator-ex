"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keyv_1 = __importDefault(require("keyv"));
async function testIterator() {
    // One of the following
    const keyv = new keyv_1.default();
    // Handle DB connection errors
    keyv.on('error', (err) => console.log('Connection Error', err));
    await keyv.set('foo', 'never expires'); // true
    await keyv.set('foo1', 'bar'); // true
    await keyv.set('foo2', 'bar2'); // true
    const foo = await keyv.get('foo'); // 'never expires'
    for await (const [key, value] of keyv.iterator()) {
        console.log(key);
        console.log(value);
    }
}
testIterator().then(() => {
    console.log('finished');
});
