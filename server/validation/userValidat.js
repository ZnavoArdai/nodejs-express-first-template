const users = require("../model/user");

const validatPassword = (req, res) => {
  let passwordValid = false;
  if (req.body.password1 == req.body.password2) {
    passwordValid = true;
    return passwordValid;
  }
  res.send("password not ok");
};


const validatEmaul = (req, res) => {
  const email = req.body.email;
  let emailValid = false;
  const exist = email.indexOf("@");
  const com = email.slice(email.length - 4);
  if (exist > 0 && com == ".com") {
    emailValid = true;
    return emailValid;
  }
  res.send("email not ok");
};

const valideAge = (req, res) => {
  const age = req.body.age;
  const ageYear = age.slice(-4);
  const todayYear = new Date();
  console.log(ageYear);
  let ageValid = false;
  if (todayYear.getFullYear() - ageYear > 18) {
    ageValid = true;
    return ageValid;
  }
  res.send("age not ok");
};



const sumValidation = (req, res, next) => {
  const emailv = validatEmaul(req, res);
  const password = validatPassword(req, res);
  const age = valideAge(req, res);
  if (emailv && password && age) {
    res.send("everything ok");
    users.push(req.body);
    next();
  } else res.send(`email:${emailv} password:${password} age:${age}`);
};

module.exports = { validatPassword, validatEmaul, sumValidation };
 