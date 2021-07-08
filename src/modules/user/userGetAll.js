import User from "./Model";

export default function userGetAll(req, res) {
  // return all users
  User.find()
    // return user with email test1@gmail.com
    // User.find({ email: "test1@gmail.com" })
    // return limited results
    // .limit(1)
    // return results, but skipped 1st value
    // .skip(1)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("User get all error");
    });
}
