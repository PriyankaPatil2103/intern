const UserDetails = require("../Model/UserSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.adduser = (req, res) => {
  const user = new UserDetails({
    name: req.body.name,
    email: req.body.email,
    MobileNo: req.body.MobileNo,
    role: req.body.role,
    Password: req.body.Password,
  });
  user
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Get all USer
exports.getalluser = (req, res) => {
  UserDetails.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(result);
    });
};

// User Login


exports.dologin = async (req, res) => {
  const { email, Password } = req.body;
  try {
    const user = await UserDetails.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(Password, user.Password);

    if (!isPasswordValid) {
      return res.status(400).send({
        message: `Invalid Password ${Password} , ${user.Password} , ${isPasswordValid}`,
      });
    }
    // console.log(process.env.JWT_SECRET,process.env.JWT_EXPIRE)
    const token = jwt.sign(
      { userId: user._id, userId: user.name },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );
    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
    return res.status(201).json({
      data: user,
      token,
    });
  } catch (error) {
    console.error("Error during login", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// exports.register = async (req, res) => {
//     const salt = await bcrypt.genSalt(10)
//     const hashpass = await bcrypt.hash(req.body.pass, salt)
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         role:req.body.role,
//         MobileNo: req.body.mobile,
//         Password: hashpass
//     })

//     user.save().then((registerduser) => {
//         let payload = { id: registerduser._id, utid: req.body.utid || 0 }
//         const token = jwt.sign(payload, config.TOKEN_SECRET)
//         console.log("token genrated")
//         res.status(200).json({ token, registerduser })
//     }).catch((err) => {
//         res.status(500).json(err)
//     })

// }

// exports.all = (req, res) => {
//     User.find().then((all) => {
//         res.status(200).json(all)
//     }).catch((err) => {
//         res.status(500).json(err)
//     })
// }

// exports.dologin = async (req, res) => {
//     const { email, Password } = req.body;
//     try {
//       const user = await UserDetails.findOne({ email });
//       if (!user) {
//         return res.status(400).send({ message: "Invalid email or password" });
//       }
//       const isPasswordValid = await bcrypt.compare(
//         Password,
//         user.Password
//       );

//       if (!isPasswordValid) {
//         return res.status(400).send({
//           message: `Invalid EmailPassword ${Password} , ${user.Password} , ${isPasswordValid}`,
//         });
//       }
//       // console.log(process.env.JWT_SECRET,process.env.JWT_EXPIRE)
//       const token = jwt.sign(
//         { userId: user._id, userId: user.Name },
//         process.env.JWT_SECRET,
//         { expiresIn: process.env.JWT_EXPIRE }
//       );
//       res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
//       return res.status(201).json({
//         data: user,
//         token,
//       });
//     } catch (error) {
//       console.error("Error during login", error);
//       return res.status(500).json({ message: "Internal server error" });
//     }
//   };
