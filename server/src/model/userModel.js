const mongoose=require('mongoose')
const bcrypt = require("bcryptjs")


const UserSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      phone: { type: Number, required: true },
      profession: { type: String, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

  UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    next();
  });

  UserSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  module.exports = mongoose.model("User", UserSchema);
