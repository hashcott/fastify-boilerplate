import Joi from 'joi';

export interface IAddressValidateDto {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address_1: string;
  address_2?: string;
  city: string;
  state: string;
  zip: string;
  country_code: string;
  order_id: string;
}

export const addressValidateSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address_1: Joi.string().required(),
  address_2: Joi.string().optional(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zip: Joi.string().required(),
  country_code: Joi.string().required(),
  order_id: Joi.string().required(),
});
