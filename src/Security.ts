import { hash as bcryptHash } from 'bcrypt';

export const hash = async (data: string) =>
  bcryptHash(data, parseInt(process.env.HASH_SALT?.toString() || '10'));
