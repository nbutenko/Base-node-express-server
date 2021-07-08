function apiNotFound(req, res) {
  res.status(400).json("API noct found");
}

export default function errorHandler(app) {
  app.use(apiNotFound);
}
