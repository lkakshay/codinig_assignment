
const User = require("../../model/userModel");


module.exports = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send({ status:'success'});
  } catch (e) {
    res.status(500).send(e.message);
  }
};
