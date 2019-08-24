import {DefaultCrudRepository} from '@loopback/repository';
import {Cars, CarsRelations} from '../models';
import {MymongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CarsRepository extends DefaultCrudRepository<
  Cars,
  typeof Cars.prototype.carname,
  CarsRelations
> {
  constructor(
    @inject('datasources.mymongo') dataSource: MymongoDataSource,
  ) {
    super(Cars, dataSource);
  }
}
