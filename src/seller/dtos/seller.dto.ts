import { UserDTO } from "src/user/dtos/user.dto";

export class SellerDTO {
  user: UserDTO;
  seller_code: string;
  company_name: string;
  trading_name: string;
  document_number: string;
  email: string;
  phone_country_code: string;
  phone_area_code: string;
  phone_number: string;
  street: string;
  neighborhood: string;
  number: string;
  city: string;
  state: string;
  complement: string;
  postal_code: string;

  constructor(seller: SellerDTO) {
    this.user = seller.user;
    this.seller_code = seller.seller_code;
    this.company_name = seller.company_name;
    this.trading_name = seller.trading_name;
    this.document_number = seller.document_number;
    this.email = seller.email;
    this.phone_country_code = seller.phone_country_code;
    this.phone_area_code = seller.phone_area_code;
    this.phone_number = seller.phone_number;
    this.street = seller.street;
    this.neighborhood = seller.neighborhood;
    this.number = seller.number;
    this.city = seller.city;
    this.state = seller.state;
    this.complement = seller.complement;
    this.postal_code = seller.postal_code;
  }
}