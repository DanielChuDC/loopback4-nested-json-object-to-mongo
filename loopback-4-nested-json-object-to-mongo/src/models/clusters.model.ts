import {Entity, model, property, hasMany} from '@loopback/repository';
import {v4 as uuid} from 'uuid';
import {Cars} from './cars.model';

// @model({settings: {}})
// class Category {
//   @property({type: 'string', default: () => uuid()})
//   name: string;
//   @property({type: 'string', default: () => uuid()})
//   model: string;
//   @property({
//     type: 'number',
//     default: () => uuid(),
//   })
//   prices: number;
// }

@model({settings: {}})
export class Clusters extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  clustername: string;

  @property({
    type: 'object',
    required: true,
  })
  clusterModel: Object;

  @hasMany(() => Cars ,{keyTo: 'clustersClustername'})
  cars: Cars[];

  constructor(data?: Partial<Clusters>) {
    super(data);
  }
}

export interface ClustersRelations {
  // describe navigational properties here
}

export type ClustersWithRelations = Clusters & ClustersRelations;
