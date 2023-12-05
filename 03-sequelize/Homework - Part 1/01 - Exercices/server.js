const express = require("express");
const characterMiddleware = require("./middlewares/character.js");
// const abilityMiddleware = require("./middlewares/ability.js");

const server = express();

server.use(express.json());

server.use("/character", characterMiddleware);
// server.use("/ability", abilityMiddleware);

server.get("/", (req, res) => {
  res.send("Henry Sequelize Homework");
});

server.post("/character", async (req, res) => {
  try {
    const { code, name, age, race, hp, mana } = req.body;

    if (!code || !name || !age || !race || !hp || !mana) {
      return res.status(404).send("Falta enviar datos obligatorios");
    }

    const newCharacter = await createCharacter({
      code,
      name,
      age,
      race,
      hp,
      mana,
    });

    return res.status(201).json(newCharacter);
  } catch (error) {
    return res.status(404).send(error);
  }
});

module.exports = server;
