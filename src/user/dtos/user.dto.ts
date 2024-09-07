export class UserDTO {
  username: string;
  email: string;
  password: string;
  document_number: string;
  role_id: number;

  constructor(user: UserDTO) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.document_number = user.document_number;
    this.role_id = user.role_id;
  }
}
