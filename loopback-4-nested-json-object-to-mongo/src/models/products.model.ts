import {Model, model, property} from '@loopback/repository';
// Import json schema for nested json
import {getJsonSchema} from '@loopback/repository-json-schema';

@model()
class Category {
  @property()
  name: string;
  model: string;
  price: number;
}

@model({settings: {strict: false}})
export class Products extends Model {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  productid: string;

  @property({
    type: 'string',
    required: true,
  })
  productname: string;

  @property({
    type: 'object',
    required: true,
    default: Category,
  })
  productDesc: object;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Products>) {
    super(data);
  }
}

// export interface ProductsRelations {
//   // describe navigational properties here
// }

const jsonSchema = getJsonSchema(Products);
// export type ProductsWithRelations = Products & ProductsRelations;
