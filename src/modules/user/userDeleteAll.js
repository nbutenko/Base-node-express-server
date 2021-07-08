import User from "./Model";

export default function userDeleteAll(req, res) {
  // alternative option:
  User.deleteMany()
    // User.findByIdAndDelete(userId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("User delete all error");
    });
}
