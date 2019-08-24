import {DefaultCrudRepository} from '@loopback/repository';
import {Clusters, ClustersRelations} from '../models';
import {MymongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClustersRepository extends DefaultCrudRepository<
  Clusters,
  typeof Clusters.prototype.clustername,
  ClustersRelations
> {
  constructor(@inject('datasources.mymongo') dataSource: MymongoDataSource) {
    super(Clusters, dataSource);
  }
}
