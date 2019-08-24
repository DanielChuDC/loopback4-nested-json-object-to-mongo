import {Entity, model, property} from '@loopback/repository';
@model({settings: {}})
class Category {
  @property({type: 'string'})
  name: string;
  @property({type: 'string'})
  model: string;
  @property({
    type: 'number',
  })
  prices: number;
}

@model({settings: {}})
export class Clusters extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  clustername: string;

  @property({
    type: 'object',
    required: true,
  })
  clusterModel: Category;

  constructor(data?: Partial<Clusters>) {
    super(data);
  }
}

export interface ClustersRelations {
  // describe navigational properties here
}

export type ClustersWithRelations = Clusters & ClustersRelations;
