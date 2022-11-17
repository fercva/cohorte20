import { indexTest } from "../calculadora";
const calculadora = require ("../calculadora");
test ("test suma", () => {
    const resultado = indexTest.suma(1,5);
    expect (resultado).toBe(6)
});
test.todo ('test de resta');
test.todo ('test de multy');
test.todo ('test de divide');