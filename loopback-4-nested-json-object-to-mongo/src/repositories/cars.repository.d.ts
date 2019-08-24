import { DefaultCrudRepository } from '@loopback/repository';
import { Cars, CarsRelations } from '../models';
import { MymongoDataSource } from '../datasources';
export declare class CarsRepository extends DefaultCrudRepository<Cars, typeof Cars.prototype.carname, CarsRelations> {
    constructor(dataSource: MymongoDataSource);
}
