import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Clusters, ClustersRelations, Cars} from '../models';
import {MymongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {CarsRepository} from './cars.repository';

export class ClustersRepository extends DefaultCrudRepository<
  Clusters,
  typeof Clusters.prototype.clustername,
  ClustersRelations
> {

  public readonly cars: HasManyRepositoryFactory<Cars, typeof Clusters.prototype.clustername>;

  constructor(@inject('datasources.mymongo') dataSource: MymongoDataSource, @repository.getter('CarsRepository') protected carsRepositoryGetter: Getter<CarsRepository>,) {
    super(Clusters, dataSource);
    this.cars = this.createHasManyRepositoryFactoryFor('cars', carsRepositoryGetter,);
  }
}
