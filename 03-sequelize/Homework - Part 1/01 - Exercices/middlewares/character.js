const { Router } = require("express");
const { Op, Character, Role } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
  const { code, name, age, race, hp, mana } = req.body;
  try {
    if (!code || !name || !hp || !mana) {
      return res.status(404).send("Falta enviar datos obligatorios");
    }

    const newCharacter = await Character.create({
      code,
      name,
      age,
      race,
      hp,
      mana,
    });

    return res.status(201).json(newCharacter);
  } catch (error) {
    return res.status(404).send("Error en alguno de los datos provistos");
  }
});

router.get("/", async (req, res) => {
  const { code, name, age, race, hp, mana } = req.query;

  try {
    let conditions = { where: {} };

    if (code) {
      conditions.where.code = code;
    }
    if (name) {
      conditions.where.name = name;
    }
    if (age) {
      conditions.where.age = age;
    }
    if (race) {
      conditions.where.race = race;
    }
    if (hp) {
      conditions.where.hp = hp;
    }
    if (mana) {
      conditions.where.mana = mana;
    }

    const charactersWhere = await Character.findAll(conditions);

    return res.status(200).json(charactersWhere);
  } catch (error) {
    return res.status(404).send("Error en alguno de los datos provistos");
  }
});

router.get("/:code", async (req, res) => {
  const { code } = req.params;

  try {
    const characterFound = await Character.findOne({
      where: { code: code },
    });

    if (!characterFound) {
      return res
        .status(404)
        .send(`El código ${code} no corresponde a un personaje existente`);
    }

    return res.json(characterFound);
  } catch (error) {
    return res.status(404).send("Error en alguno de los datos provistos");
  }
});

router.put("/:attribute", async (req, res) => {
  const { attribute } = req.params;
  const { value } = req.query;

  try {
    await Character.update(
      { [attribute]: value },
      {
        where: {
          [attribute]: null,
        },
      }
    );

    return res.send("Personajes actualizados");
  } catch (error) {
    return res.status(404).send("Error en alguno de los datos provistos");
  }
});

module.exports = router;
