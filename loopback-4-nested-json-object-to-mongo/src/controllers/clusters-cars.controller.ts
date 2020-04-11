import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Clusters,
  Cars,
} from '../models';
import {ClustersRepository} from '../repositories';

export class ClustersCarsController {
  constructor(
    @repository(ClustersRepository) protected clustersRepository: ClustersRepository,
  ) { }

  @get('/clusters/{id}/cars', {
    responses: {
      '200': {
        description: 'Array of Cars\'s belonging to Clusters',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cars)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Cars>,
  ): Promise<Cars[]> {
    return this.clustersRepository.cars(id).find(filter);
  }

  @post('/clusters/{id}/cars', {
    responses: {
      '200': {
        description: 'Clusters model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cars)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Clusters.prototype.clustername,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cars, {
            exclude: ['carname'],
            optional: ['clustersClustername']
          }),
        },
      },
    }) cars: Omit<Cars, 'carname'>,
  ): Promise<Cars> {
    return this.clustersRepository.cars(id).create(cars);
  }

  @patch('/clusters/{id}/cars', {
    responses: {
      '200': {
        description: 'Clusters.Cars PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cars, {partial: true}),
        },
      },
    })
    cars: Partial<Cars>,
    @param.query.object('where', getWhereSchemaFor(Cars)) where?: Where<Cars>,
  ): Promise<Count> {
    return this.clustersRepository.cars(id).patch(cars, where);
  }

  @del('/clusters/{id}/cars', {
    responses: {
      '200': {
        description: 'Clusters.Cars DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Cars)) where?: Where<Cars>,
  ): Promise<Count> {
    return this.clustersRepository.cars(id).delete(where);
  }
}
