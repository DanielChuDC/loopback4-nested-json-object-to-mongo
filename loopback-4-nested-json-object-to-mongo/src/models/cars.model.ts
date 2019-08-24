import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Cars extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  carname: string;

  @property({
    type: 'string',
    required: true,
  })
  cardesc: string;

  @property({
    type: 'string',
  })
  carplateNum?: string;

  constructor(data?: Partial<Cars>) {
    super(data);
  }
}

export interface CarsRelations {
  // describe navigational properties here
}

export type CarsWithRelations = Cars & CarsRelations;
