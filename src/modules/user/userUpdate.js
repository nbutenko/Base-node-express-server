import User from "./Model";

export default function userUpdate(req, res) {
  const userId = req.params.userId;

  User.updateOne({ _id: userId }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("User update error");
    });
}
