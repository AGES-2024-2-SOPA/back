import { PrismaClient } from '@prisma/client';
import { hash } from '../src/Security';

const prisma = new PrismaClient();

async function main() {
  await createRoles();

  await createUsers();

  await createBrands();

  await createModels();

  await createCars();

  await createPartStatus();

  await createPartTypes();

  await createParts();

  await createPurchaseStatus();

  await createPurchases();

  await createPurchaseRoles();

  await createPurchaseUsers();

  await createPurchaseParts();
}

async function createRoles() {
  await prisma.role.upsert({
    where: { id: 1, enumerator: 'admin' },
    update: {},
    create: { enumerator: 'admin' },
  });
  await prisma.role.upsert({
    where: { id: 2, enumerator: 'default' },
    update: {},
    create: { enumerator: 'default' },
  });

  console.log('Roles inserted successfully');
}

async function createUsers() {
  await prisma.user.upsert({
    where: { email: 'admin@email.com' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@email.com',
      password: await hash('admin'),
      document_number: '12345678900',
      role_id: 1,
    },
  });

  await prisma.user.upsert({
    where: { email: 'user@email.com' },
    update: {},
    create: {
      username: 'user',
      email: 'user@email.com',
      password: await hash('user'),
      document_number: '12345678901',
      role_id: 2,
    },
  });

  await prisma.user.upsert({
    where: { email: 'seller.user@email.com' },
    update: {},
    create: {
      username: 'seller.user',
      email: 'seller.user@email.com',
      password: await hash('seller.user'),
      document_number: '12345678903',
      role_id: 2,
    },
  });

  await prisma.user.upsert({
    where: { email: 'buyer.user@email.com' },
    update: {},
    create: {
      username: 'buyer.user',
      email: 'buyer.user@email.com',
      password: await hash('buyer.user'),
      document_number: '12345678902',
      role_id: 2,
    },
  });

  await prisma.user.upsert({
    where: { email: 'other.seller.user@email.com' },
    update: {},
    create: {
      username: 'other.seller.user',
      email: 'other.seller.user@email.com',
      password: await hash('other.seller.'),
      document_number: '12345678904',
      role_id: 2,
    },
  });

  await prisma.user.upsert({
    where: { email: 'other.buyer.user@email.com' },
    update: {},
    create: {
      username: 'other.buyer.user',
      email: 'other.buyer.user@email.com',
      password: 'other.buyer.user',
      document_number: '12345678905',
      role_id: 2,
    },
  });

  await prisma.seller.upsert({
    where: { user_id: 3 },
    update: {},
    create: {
      user_id: 3,
      seller_code: '12345678903',
      company_name: 'Seller Company',
      trading_name: 'Seller Trading Name',
      document_number: '12345678903',
      email: 'seller.company@email.com',
      phone_country_code: '55',
      phone_area_code: '11',
      phone_number: '999999999',
      street: 'Seller Street',
      neighborhood: 'Seller Neighborhood',
      number: '123',
      city: 'Seller City',
      state: 'SP',
      complement: 'Seller Complement',
      postal_code: '12345678',
    },
  });

  await prisma.buyer.upsert({
    where: { user_id: 4 },
    update: {},
    create: {
      user_id: 4,
      company_name: 'Buyer Company',
      trading_name: 'Buyer Trading Name',
      document_number: '12345678902',
      email: 'buyer.company@email.com',
      phone_country_code: '55',
      phone_area_code: '11',
      phone_number: '999999999',
      street: 'Buyer Street',
      neighborhood: 'Buyer Neighborhood',
      number: '123',
      city: 'Buyer City',
      state: 'SP',
      complement: 'Buyer Complement',
      postal_code: '12345678',
    },
  });

  await prisma.seller.upsert({
    where: { user_id: 5 },
    update: {},
    create: {
      user_id: 5,
      seller_code: '12345678904',
      company_name: 'Other Seller Company',
      trading_name: 'Other Seller Trading Name',
      document_number: '12345678904',
      email: 'other.seler.company@email.com',
      phone_country_code: '55',
      phone_area_code: '11',
      phone_number: '999999999',
      street: 'Other Seller Street',
      neighborhood: 'Other Seller Neighborhood',
      number: '123',
      city: 'Other Seller City',
      state: 'SP',
      complement: 'Other Seller Complement',
      postal_code: '12345678',
    },
  });

  await prisma.buyer.upsert({
    where: { user_id: 6 },
    update: {},
    create: {
      user_id: 6,
      company_name: 'Other Buyer Company',
      trading_name: 'Other Buyer Trading Name',
      document_number: '12345678905',
      email: 'other.buyer.company@email.com',
      phone_country_code: '55',
      phone_area_code: '11',
      phone_number: '999999999',
      street: 'Other Buyer Street',
      neighborhood: 'Other Buyer Neighborhood',
      number: '123',
      city: 'Other Buyer City',
      state: 'SP',
      complement: 'Other Buyer Complement',
      postal_code: '12345678',
    },
  });

  console.log('Users inserted successfully');
}

async function createBrands() {
  await prisma.brand.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      enumerator: 'Ford',
    },
  });

  await prisma.brand.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      enumerator: 'Jeep',
    },
  });

  await prisma.brand.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      enumerator: 'Chevrolet',
    },
  });

  await prisma.brand.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      enumerator: 'Volkswagen',
    },
  });

  await prisma.brand.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      enumerator: 'Fiat',
    },
  });

  await prisma.brand.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      enumerator: 'Toyota',
    },
  });

  await prisma.brand.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      enumerator: 'Honda',
    },
  });

  await prisma.brand.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      enumerator: 'Hyundai',
    },
  });

  await prisma.brand.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      enumerator: 'Renault',
    },
  });

  await prisma.brand.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      enumerator: 'Nissan',
    },
  });

  await prisma.brand.upsert({
    where: { id: 11 },
    update: {},
    create: {
      id: 11,
      enumerator: 'Mercedes-Benz',
    },
  });

  await prisma.brand.upsert({
    where: { id: 12 },
    update: {},
    create: {
      id: 12,
      enumerator: 'BMW',
    },
  });

  await prisma.brand.upsert({
    where: { id: 13 },
    update: {},
    create: {
      id: 13,
      enumerator: 'Audi',
    },
  });

  await prisma.brand.upsert({
    where: { id: 14 },
    update: {},
    create: {
      id: 14,
      enumerator: 'Kia',
    },
  });

  await prisma.brand.upsert({
    where: { id: 15 },
    update: {},
    create: {
      id: 15,
      enumerator: 'Mitsubishi',
    },
  });

  await prisma.brand.upsert({
    where: { id: 16 },
    update: {},
    create: {
      id: 16,
      enumerator: 'Land Rover',
    },
  });

  await prisma.brand.upsert({
    where: { id: 17 },
    update: {},
    create: {
      id: 17,
      enumerator: 'Peugeot',
    },
  });

  await prisma.brand.upsert({
    where: { id: 18 },
    update: {},
    create: {
      id: 18,
      enumerator: 'Citroen',
    },
  });

  await prisma.brand.upsert({
    where: { id: 19 },
    update: {},
    create: {
      id: 19,
      enumerator: 'Volvo',
    },
  });

  await prisma.brand.upsert({
    where: { id: 20 },
    update: {},
    create: {
      id: 20,
      enumerator: 'Porsche',
    },
  });

  console.log('Brands inserted successfully');
}

async function createModels() {
  await prisma.model.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      enumerator: 'Ka',
      brand_id: 1,
    },
  });

  await prisma.model.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      enumerator: 'EcoSport',
      brand_id: 1,
    },
  });

  await prisma.model.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      enumerator: 'Ranger',
      brand_id: 1,
    },
  });

  await prisma.model.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      enumerator: 'Compass',
      brand_id: 2,
    },
  });

  await prisma.model.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      enumerator: 'Renegade',
      brand_id: 2,
    },
  });

  await prisma.model.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      enumerator: 'Commodore',
      brand_id: 3,
    },
  });

  await prisma.model.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      enumerator: 'Cruze',
      brand_id: 3,
    },
  });

  await prisma.model.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      enumerator: 'Gol',
      brand_id: 4,
    },
  });

  await prisma.model.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      enumerator: 'Polo',
      brand_id: 4,
    },
  });

  await prisma.model.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      enumerator: 'Uno',
      brand_id: 5,
    },
  });

  await prisma.model.upsert({
    where: { id: 11 },
    update: {},
    create: {
      id: 11,
      enumerator: 'Toro',
      brand_id: 5,
    },
  });

  await prisma.model.upsert({
    where: { id: 12 },
    update: {},
    create: {
      id: 12,
      enumerator: 'Corolla',
      brand_id: 6,
    },
  });

  await prisma.model.upsert({
    where: { id: 13 },
    update: {},
    create: {
      id: 13,
      enumerator: 'Hilux',
      brand_id: 6,
    },
  });

  await prisma.model.upsert({
    where: { id: 14 },
    update: {},
    create: {
      id: 14,
      enumerator: 'Civic',
      brand_id: 7,
    },
  });

  await prisma.model.upsert({
    where: { id: 15 },
    update: {},
    create: {
      id: 15,
      enumerator: 'HR-V',
      brand_id: 7,
    },
  });

  await prisma.model.upsert({
    where: { id: 16 },
    update: {},
    create: {
      id: 16,
      enumerator: 'HB20',
      brand_id: 8,
    },
  });

  await prisma.model.upsert({
    where: { id: 17 },
    update: {},
    create: {
      id: 17,
      enumerator: 'Creta',
      brand_id: 8,
    },
  });

  await prisma.model.upsert({
    where: { id: 18 },
    update: {},
    create: {
      id: 18,
      enumerator: 'Kwid',
      brand_id: 9,
    },
  });

  await prisma.model.upsert({
    where: { id: 19 },
    update: {},
    create: {
      id: 19,
      enumerator: 'Kicks',
      brand_id: 9,
    },
  });

  await prisma.model.upsert({
    where: { id: 20 },
    update: {},
    create: {
      id: 20,
      enumerator: 'Classe A',
      brand_id: 11,
    },
  });

  await prisma.model.upsert({
    where: { id: 21 },
    update: {},
    create: {
      id: 21,
      enumerator: 'Classe C',
      brand_id: 11,
    },
  });

  await prisma.model.upsert({
    where: { id: 22 },
    update: {},
    create: {
      id: 22,
      enumerator: 'Série 1',
      brand_id: 12,
    },
  });

  await prisma.model.upsert({
    where: { id: 23 },
    update: {},
    create: {
      id: 23,
      enumerator: 'Série 3',
      brand_id: 12,
    },
  });

  await prisma.model.upsert({
    where: { id: 24 },
    update: {},
    create: {
      id: 24,
      enumerator: 'A3',
      brand_id: 13,
    },
  });

  await prisma.model.upsert({
    where: { id: 25 },
    update: {},
    create: {
      id: 25,
      enumerator: 'A4',
      brand_id: 13,
    },
  });

  await prisma.model.upsert({
    where: { id: 26 },
    update: {},
    create: {
      id: 26,
      enumerator: 'Sportage',
      brand_id: 14,
    },
  });

  await prisma.model.upsert({
    where: { id: 27 },
    update: {},
    create: {
      id: 27,
      enumerator: 'Cerato',
      brand_id: 14,
    },
  });

  await prisma.model.upsert({
    where: { id: 28 },
    update: {},
    create: {
      id: 28,
      enumerator: 'Outlander',
      brand_id: 15,
    },
  });

  await prisma.model.upsert({
    where: { id: 29 },
    update: {},
    create: {
      id: 29,
      enumerator: 'Lancer',
      brand_id: 15,
    },
  });

  await prisma.model.upsert({
    where: { id: 30 },
    update: {},
    create: {
      id: 30,
      enumerator: 'Discovery',
      brand_id: 16,
    },
  });

  await prisma.model.upsert({
    where: { id: 31 },
    update: {},
    create: {
      id: 31,
      enumerator: 'Range Rover Evoque',
      brand_id: 16,
    },
  });

  await prisma.model.upsert({
    where: { id: 32 },
    update: {},
    create: {
      id: 32,
      enumerator: '208',
      brand_id: 17,
    },
  });

  await prisma.model.upsert({
    where: { id: 33 },
    update: {},
    create: {
      id: 33,
      enumerator: '2008',
      brand_id: 17,
    },
  });

  await prisma.model.upsert({
    where: { id: 34 },
    update: {},
    create: {
      id: 34,
      enumerator: 'C3',
      brand_id: 18,
    },
  });

  await prisma.model.upsert({
    where: { id: 35 },
    update: {},
    create: {
      id: 35,
      enumerator: 'C4',
      brand_id: 18,
    },
  });

  await prisma.model.upsert({
    where: { id: 36 },
    update: {},
    create: {
      id: 36,
      enumerator: 'XC40',
      brand_id: 19,
    },
  });

  await prisma.model.upsert({
    where: { id: 37 },
    update: {},
    create: {
      id: 37,
      enumerator: 'XC60',
      brand_id: 19,
    },
  });

  await prisma.model.upsert({
    where: { id: 38 },
    update: {},
    create: {
      id: 38,
      enumerator: 'Cayenne',
      brand_id: 20,
    },
  });

  await prisma.model.upsert({
    where: { id: 39 },
    update: {},
    create: {
      id: 39,
      enumerator: 'Macan',
      brand_id: 20,
    },
  });

  console.log('Models inserted successfully');
}

async function createCars() {
  await prisma.car.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      seller_id: 3,
      model_id: 1,
      release_year: new Date('2021-01-01'),
      cost: 50000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      seller_id: 3,
      model_id: 2,
      release_year: new Date('2021-01-01'),
      cost: 70000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      seller_id: 3,
      model_id: 3,
      release_year: new Date('2021-01-01'),
      cost: 90000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      seller_id: 3,
      model_id: 4,
      release_year: new Date('2021-01-01'),
      cost: 100000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      seller_id: 5,
      model_id: 5,
      release_year: new Date('2021-01-01'),
      cost: 120000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      seller_id: 5,
      model_id: 6,
      release_year: new Date('2021-01-01'),
      cost: 150000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      seller_id: 5,
      model_id: 7,
      release_year: new Date('2021-01-01'),
      cost: 180000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      seller_id: 5,
      model_id: 8,
      release_year: new Date('2021-01-01'),
      cost: 200000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      seller_id: 5,
      model_id: 9,
      release_year: new Date('2021-01-01'),
      cost: 250000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      seller_id: 5,
      model_id: 10,
      release_year: new Date('2021-01-01'),
      cost: 300000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  console.log('Cars inserted successfully');
}

async function createPartStatus() {
  await prisma.partStatus.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      enumerator: 'new',
    },
  });

  await prisma.partStatus.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      enumerator: 'used',
    },
  });

  console.log('Part status inserted successfully');
}

async function createPartTypes() {
  await prisma.partType.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      enumerator: 'engine',
    },
  });

  await prisma.partType.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      enumerator: 'gearbox',
    },
  });

  await prisma.partType.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      enumerator: 'suspension',
    },
  });

  await prisma.partType.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      enumerator: 'brake',
    },
  });

  await prisma.partType.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      enumerator: 'wheel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      enumerator: 'tire',
    },
  });

  await prisma.partType.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      enumerator: 'battery',
    },
  });

  await prisma.partType.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      enumerator: 'exhaust',
    },
  });

  await prisma.partType.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      enumerator: 'electrical',
    },
  });

  await prisma.partType.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      enumerator: 'cooling',
    },
  });

  await prisma.partType.upsert({
    where: { id: 11 },
    update: {},
    create: {
      id: 11,
      enumerator: 'fuel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 12 },
    update: {},
    create: {
      id: 12,
      enumerator: 'air conditioning',
    },
  });

  await prisma.partType.upsert({
    where: { id: 13 },
    update: {},
    create: {
      id: 13,
      enumerator: 'interior',
    },
  });

  await prisma.partType.upsert({
    where: { id: 14 },
    update: {},
    create: {
      id: 14,
      enumerator: 'exterior',
    },
  });

  await prisma.partType.upsert({
    where: { id: 15 },
    update: {},
    create: {
      id: 15,
      enumerator: 'glass',
    },
  });

  await prisma.partType.upsert({
    where: { id: 16 },
    update: {},
    create: {
      id: 16,
      enumerator: 'accessory',
    },
  });

  console.log('Part types inserted successfully');
}

async function createParts() {
  await prisma.part.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      car_id: 1,
      part_status_id: 1,
      part_type_id: 1,
      description: 'Engine',
      price: 10000,
    },
  });

  await prisma.part.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      car_id: 2,
      part_status_id: 1,
      part_type_id: 2,
      description: 'Gearbox',
      price: 15000,
    },
  });

  await prisma.part.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      car_id: 3,
      part_status_id: 1,
      part_type_id: 3,
      description: 'Suspension',
      price: 20000,
    },
  });

  await prisma.part.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      car_id: 4,
      part_status_id: 1,
      part_type_id: 4,
      description: 'Brake',
      price: 25000,
    },
  });

  await prisma.part.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      car_id: 5,
      part_status_id: 1,
      part_type_id: 5,
      description: 'Wheel',
      price: 30000,
    },
  });

  await prisma.part.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      car_id: 6,
      part_status_id: 1,
      part_type_id: 6,
      description: 'Tire',
      price: 35000,
    },
  });

  await prisma.part.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      car_id: 7,
      part_status_id: 1,
      part_type_id: 7,
      description: 'Battery',
      price: 40000,
    },
  });

  await prisma.part.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      car_id: 8,
      part_status_id: 1,
      part_type_id: 8,
      description: 'Exhaust',
      price: 45000,
    },
  });

  await prisma.part.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      car_id: 9,
      part_status_id: 1,
      part_type_id: 9,
      description: 'Electrical',
      price: 50000,
    },
  });

  await prisma.part.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      car_id: 10,
      part_status_id: 1,
      part_type_id: 10,
      description: 'Cooling',
      price: 55000,
    },
  });

  await prisma.part.upsert({
    where: { id: 11 },
    update: {},
    create: {
      id: 11,
      car_id: 1,
      part_status_id: 1,
      part_type_id: 11,
      description: 'Fuel',
      price: 60000,
    },
  });

  await prisma.part.upsert({
    where: { id: 12 },
    update: {},
    create: {
      id: 12,
      car_id: 2,
      part_status_id: 1,
      part_type_id: 12,
      description: 'Air Conditioning',
      price: 65000,
    },
  });

  await prisma.part.upsert({
    where: { id: 13 },
    update: {},
    create: {
      id: 13,
      car_id: 3,
      part_status_id: 1,
      part_type_id: 13,
      description: 'Interior',
      price: 70000,
    },
  });

  await prisma.part.upsert({
    where: { id: 14 },
    update: {},
    create: {
      id: 14,
      car_id: 4,
      part_status_id: 1,
      part_type_id: 14,
      description: 'Exterior',
      price: 75000,
    },
  });

  await prisma.part.upsert({
    where: { id: 15 },
    update: {},
    create: {
      id: 15,
      car_id: 5,
      part_status_id: 1,
      part_type_id: 15,
      description: 'Glass',
      price: 80000,
    },
  });

  await prisma.part.upsert({
    where: { id: 16 },
    update: {},
    create: {
      id: 16,
      car_id: 6,
      part_status_id: 1,
      part_type_id: 16,
      description: 'Accessory',
      price: 85000,
    },
  });

  console.log('Parts inserted successfully');
}

async function createPurchaseStatus() {
  await prisma.purchaseStatus.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      enumerator: 'pending',
    },
  });

  await prisma.purchaseStatus.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      enumerator: 'approved',
    },
  });

  await prisma.purchaseStatus.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      enumerator: 'rejected',
    },
  });

  console.log('Purchase status inserted successfully');
}

async function createPurchases() {
  await prisma.purchase.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      purchase_status_id: 1,
      description: 'Pending Purchase',
    },
  });

  await prisma.purchase.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      purchase_status_id: 2,
      description: 'Approved Purchase',
    },
  });

  await prisma.purchase.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      purchase_status_id: 3,
      description: 'Rejected Purchase',
    },
  });

  console.log('Purchases inserted successfully');
}

async function createPurchaseRoles() {
  await prisma.purchaseRole.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      enumerator: 'seller',
    },
  });

  await prisma.purchaseRole.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      enumerator: 'buyer',
    },
  });

  console.log('Purchase roles inserted successfully');
}

async function createPurchaseUsers() {
  await prisma.purchaseUser.upsert({
    where: { user_id: 3 },
    update: {},
    create: {
      user_id: 3,
      purchase_id: 1,
      role_id: 1,
    },
  });

  await prisma.purchaseUser.upsert({
    where: { user_id: 4 },
    update: {},
    create: {
      user_id: 4,
      purchase_id: 1,
      role_id: 2,
    },
  });

  await prisma.purchaseUser.upsert({
    where: { user_id: 5 },
    update: {},
    create: {
      user_id: 5,
      purchase_id: 2,
      role_id: 1,
    },
  });

  await prisma.purchaseUser.upsert({
    where: { user_id: 6 },
    update: {},
    create: {
      user_id: 6,
      purchase_id: 2,
      role_id: 2,
    },
  });

  await prisma.purchaseUser.upsert({
    where: { user_id: 3 },
    update: {},
    create: {
      user_id: 3,
      purchase_id: 3,
      role_id: 1,
    },
  });

  await prisma.purchaseUser.upsert({
    where: { user_id: 4 },
    update: {},
    create: {
      user_id: 4,
      purchase_id: 3,
      role_id: 2,
    },
  });

  console.log('Purchase users inserted successfully');
}

async function createPurchaseParts() {
  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 1, part_id: 1 } },
    update: {},
    create: {
      purchase_id: 1,
      part_id: 1,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 1, part_id: 2 } },
    update: {},
    create: {
      purchase_id: 1,
      part_id: 2,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 1, part_id: 3 } },
    update: {},
    create: {
      purchase_id: 1,
      part_id: 3,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 1, part_id: 4 } },
    update: {},
    create: {
      purchase_id: 1,
      part_id: 4,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 2, part_id: 5 } },
    update: {},
    create: {
      purchase_id: 2,
      part_id: 5,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 2, part_id: 6 } },
    update: {},
    create: {
      purchase_id: 2,
      part_id: 6,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 2, part_id: 7 } },
    update: {},
    create: {
      purchase_id: 2,
      part_id: 7,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 2, part_id: 8 } },
    update: {},
    create: {
      purchase_id: 2,
      part_id: 8,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 3, part_id: 9 } },
    update: {},
    create: {
      purchase_id: 3,
      part_id: 9,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 3, part_id: 10 } },
    update: {},
    create: {
      purchase_id: 3,
      part_id: 10,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 3, part_id: 11 } },
    update: {},
    create: {
      purchase_id: 3,
      part_id: 11,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 3, part_id: 12 } },
    update: {},
    create: {
      purchase_id: 3,
      part_id: 12,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 3, part_id: 13 } },
    update: {},
    create: {
      purchase_id: 3,
      part_id: 13,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 3, part_id: 14 } },
    update: {},
    create: {
      purchase_id: 3,
      part_id: 14,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 3, part_id: 15 } },
    update: {},
    create: {
      purchase_id: 3,
      part_id: 15,
    },
  });

  await prisma.purchasePart.upsert({
    where: { purchase_id_part_id: { purchase_id: 3, part_id: 16 } },
    update: {},
    create: {
      purchase_id: 3,
      part_id: 16,
    },
  });

  console.log('Purchase parts inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
