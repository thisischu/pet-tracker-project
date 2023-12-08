const express = require("express");
const Pet = require("./db/models/example");
const router = express.Router();



const create = async (req, res) => {
  try {
    const {
      body: { name, profilePicture, options, friendly },
    } = req;

    const newPet = await Pet.create(
      name,
      profilePicture,
      options,
      friendly,
    );

    res.status(201).send(newPet);
  } catch (error) {
    res.status(500).send({ err: "Can't create" });
  }
};

const list = async (req, res) => {
    const petList = await Pet.list();
    res.send(petList);
};
  

router.post("/pets", create);
router.get("/pets", list);

module.exports = router;
