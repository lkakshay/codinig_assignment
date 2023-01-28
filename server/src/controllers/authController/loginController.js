const User = require("../../model/userModel");

module.exports = async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(401).send("invalid credentials");

    const match = user.checkPassword(req.body.password);

    if (!match) return res.status(401).send("invalid credentials");

    return res.status(200).send({ status:'success' });
  } catch (e) {
    res.status(500).send(e.message);
  }
};
