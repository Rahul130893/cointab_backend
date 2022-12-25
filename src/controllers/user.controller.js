const express = require("express");
const User = require("../models/user.model");
const router = express.Router();


router.get("", async (req, res) => {
  
  try {
    const user = await User.find().lean().exec();

    return res.status(200).send({ user: user }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  
  try {
    const user = await User.create(req.body);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.delete("/", async (req, res) => {
    console.log("deleted")
    try {
        const user = await User.deleteMany().lean().exec();
        return res.status(200).send({ user: user });
    } catch (error) {
            return res.status(500).send({ message: error.message });

    }
   
})

module.exports = router;