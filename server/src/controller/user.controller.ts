import express, { Request, Response } from 'express';
import { getUser, getUserById, updateUser, deleteUser } from '../service/user.service';
const route = express.Router();

route.get('/', async function (req, res) {
  try {
    const user = await getUser();
    res.status(200).send(user);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

route.get('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

route.put('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd, role } = req.body;

    const user = await updateUser(id, name, surname, email, pwd, role);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});
route.delete('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

export default route;
