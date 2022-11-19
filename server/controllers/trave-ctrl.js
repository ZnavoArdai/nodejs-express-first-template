const states = require("../model/states");
const getTravel = (req, res) => {
  if (states) {
    res.send( states );
  }

  res.send("obj not exist");
};
const findIndex = (req) => {
  const obj = states.find((obj) => obj.id == req.params.id);
  const index = states.indexOf(obj);
  return index;
};

const createState = (req, res) => {
  const data = req.body;
  states.push(data);
  res.send("create sucsess");
};

const updateState = (req, res) => {
  const index = findIndex(req);
  const data = req.body.new;
  console.log(states[1]);

  states[index] = data;
  res.send("state updated");
};

const removeState=(req,res)=>{
const index=findIndex(req);
index>-1?states.splice(index,1)&&res.send("remove"):res.send("not found")
}

const findById=(req,res)=>{
    const obj=states.find(obj=>obj.id==req.params.id);
    obj? res.send(obj):res.send("not found")

}
module.exports = {
  getTravel,
  createState,
  updateState,
  removeState,
  findById,
};
