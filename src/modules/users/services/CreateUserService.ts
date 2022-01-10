import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  name: string;
  age: number;
  email: string;
  password: string;
  phone_number: string;
}

class CreateUserService {
  public async execute({ name, email, password, age, phone_number }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = await usersRepository.create({
      age,
      email,
      phone_number,
      name,
      password: hashedPassword,
    })

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;