"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
require('dotenv').config();
const app = (0, express_1.default)();
const { WEBFLOW_CLIENT_ID, WEBFLOW_SECRET, PORT, TOKEN_ENDPOINT_URL } = process.env;
app.use(express_1.default.json());
app.get('/token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.query;
        const token = yield getToken(code);
        res.send(token);
    }
    catch (error) {
        res.status(400).send();
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const getToken = (code) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(TOKEN_ENDPOINT_URL, {
            client_id: WEBFLOW_CLIENT_ID,
            client_secret: WEBFLOW_SECRET,
            code: code,
            grant_type: 'authorization_code',
        });
        const accessToken = response.data.access_token;
        return accessToken;
    }
    catch (error) {
        throw error;
    }
});
