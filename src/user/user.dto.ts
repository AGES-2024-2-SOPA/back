export class UserDTO {
  username: string;
  email: string;
  password: string;
  document_number: string;

  constructor(user: UserDTO) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.document_number = user.document_number;
  }
}
