import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import { celebrate, Joi, Segments } from 'celebrate';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/', usersController.index);

usersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }
  }),
  usersController.show
);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      age: Joi.number().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      phone_number: Joi.string().required()
    }
  }),
  usersController.create
);

usersRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      age: Joi.number(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      old_password: Joi.string().required(),
      phone_number: Joi.string().required()
    }
  }),
  isAuthenticated,
  usersController.update
);

usersRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }
  }),
  usersController.delete
);

export default usersRouter;