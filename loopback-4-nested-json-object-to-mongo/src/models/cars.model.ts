import {Entity, model, property, hasMany} from '@loopback/repository';
import {v4 as uuid} from 'uuid';
import {Products} from './products.model';

@model({settings: {}})
export class Cars extends Entity {
  @property({
    type: 'string',
    id: true,
    default: () => uuid(),
  })
  carname: string;

  @property({
    type: 'string',
    default: () => uuid(),
  })
  cardesc: string;

  @property({
    type: 'string',
    default: () => uuid(),
  })
  carplateNum?: string;

  @property({
    type: 'string',
  })
  clustersClustername?: string;

  constructor(data?: Partial<Cars>) {
    super(data);
  }
}

export interface CarsRelations {
  // describe navigational properties here
}

export type CarsWithRelations = Cars & CarsRelations;
