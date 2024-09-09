-- CreateTable
CREATE TABLE "Seller" (
    "user_id" INTEGER NOT NULL,
    "seller_code" VARCHAR(11) NOT NULL,
    "company_name" VARCHAR NOT NULL,
    "trading_name" VARCHAR NOT NULL,
    "document_number" VARCHAR(11) NOT NULL,
    "email" VARCHAR NOT NULL,
    "phone_country_code" VARCHAR(3) NOT NULL,
    "phone_area_code" VARCHAR(2) NOT NULL,
    "phone_number" VARCHAR(9) NOT NULL,
    "street" VARCHAR NOT NULL,
    "neighborhood" VARCHAR NOT NULL,
    "number" VARCHAR NOT NULL,
    "city" VARCHAR NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "complement" VARCHAR NOT NULL,
    "postal_code" VARCHAR(8) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Buyer" (
    "user_id" INTEGER NOT NULL,
    "company_name" VARCHAR NOT NULL,
    "trading_name" VARCHAR NOT NULL,
    "document_number" VARCHAR(11) NOT NULL,
    "email" VARCHAR NOT NULL,
    "phone_country_code" VARCHAR(3) NOT NULL,
    "phone_area_code" VARCHAR(2) NOT NULL,
    "phone_number" VARCHAR(9) NOT NULL,
    "street" VARCHAR NOT NULL,
    "neighborhood" VARCHAR NOT NULL,
    "number" VARCHAR NOT NULL,
    "city" VARCHAR NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "complement" VARCHAR NOT NULL,
    "postal_code" VARCHAR(8) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Buyer_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "enumerator" VARCHAR NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buyer" ADD CONSTRAINT "Buyer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
