import { hash as bcryptHash } from 'bcrypt';


export const hash = async (data: string) =>
  bcryptHash(data, process.env.HASH_SALT as string);
