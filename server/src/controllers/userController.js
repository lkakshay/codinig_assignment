const User = require("../model/userModel");

const getAll = async (req, res) => {
    try {
      const data = await User.find();
      return res.status(200).send(data);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  const getUser = async (req, res) => {
    try {
      const data = await User.findById(req.params.id)
      return res.status(200).send(data);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  const editUser = async (req, res) => {

    try {
      const data = await User.findByIdAndUpdate(req.params.id,req.body)
      return res.status(200).send({status:'success'});
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  const deleteUser = async (req, res) => {

    try {
      const data = await User.findByIdAndDelete(req.params.id)
      return res.status(200).send({status:'success'});
    } catch (e) {
      res.status(500).send(e.message);
    }
  };


  module.exports={getAll,getUser,editUser,deleteUser}