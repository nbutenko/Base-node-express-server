let count_names = [];
let counter = 0;

export default function info(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  const c = req.body.operation;
  const sum = eval(a + c + b);
  count_names.push(req.body.name);
  res.send("Info here! " + sum + " Names: " + count_names + "Counter: " + counter++);
}
