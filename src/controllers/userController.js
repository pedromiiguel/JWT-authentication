import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.create({
        email,
        password,
      });

      const { _id } = user;

      return res.json({ _id });
    } catch (err) {
        console.log(err)
    }
  }
}

export default new UserController();
