"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') }); // RUTA RELATIVA DESDE dist
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.get('/', (request, response) => {
    response.status(200).send('Hello World');
});
app
    .listen(PORT, () => {
    console.log('Server running at PORT: ', PORT);
})
    .on('error', (error) => {
    throw new Error(error.message);
});
