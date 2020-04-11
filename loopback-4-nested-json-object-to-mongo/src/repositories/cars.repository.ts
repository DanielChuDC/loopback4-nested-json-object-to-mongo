import {
  DefaultCrudRepository,
  repository,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {Cars, CarsRelations, Products} from '../models';
import {MymongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
//import {ProductsRepository} from './products.repository';

export class CarsRepository extends DefaultCrudRepository<
  Cars,
  typeof Cars.prototype.carname,
  CarsRelations
> {
  constructor(@inject('datasources.mymongo') dataSource: MymongoDataSource) {
    super(Cars, dataSource);
  }
}
