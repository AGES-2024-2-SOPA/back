export class AuthDTO {
  email: string;
  password: string;

  constructor(auth: AuthDTO) {
    this.email = auth.email;
    this.password = auth.password;
  }
}
