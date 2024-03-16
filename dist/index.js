"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const output_1 = require("./output");
const bootstrap = () => {
    output_1.Output.display();
    while (true) {
        output_1.Output.choice((0, readline_sync_1.question)());
        output_1.Output.display();
    }
};
bootstrap();
