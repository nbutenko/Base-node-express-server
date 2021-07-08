const menu = [];

export default function home(req, res) {
  menu.push(req.body.menu);
  res.status(200).json(menu);
}
