import { DefaultCrudRepository } from '@loopback/repository';
import { Clusters, ClustersRelations } from '../models';
import { MymongoDataSource } from '../datasources';
export declare class ClustersRepository extends DefaultCrudRepository<Clusters, typeof Clusters.prototype.clustername, ClustersRelations> {
    constructor(dataSource: MymongoDataSource);
}
