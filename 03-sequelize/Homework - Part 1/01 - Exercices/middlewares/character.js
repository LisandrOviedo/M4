const { Router } = require("express");
const { Op, Character, Role } = require("../db");
const router = Router();

// const createCharacter = async (character) => {
//   try {
//     const newCharacter = await Character.create(character);
//     return newCharacter;
//   } catch (error) {
//     return new Error("Error en alguno de los datos provistos");
//   }
// };

module.exports = router;
