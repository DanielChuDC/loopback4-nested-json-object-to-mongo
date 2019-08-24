import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Clusters} from '../models';
import {ClustersRepository} from '../repositories';

export class ClusterController {
  constructor(
    @repository(ClustersRepository)
    public clustersRepository : ClustersRepository,
  ) {}

  @post('/clusters', {
    responses: {
      '200': {
        description: 'Clusters model instance',
        content: {'application/json': {schema: getModelSchemaRef(Clusters)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clusters),
        },
      },
    })
    clusters: Omit<Clusters, 'id'>,
  ): Promise<Clusters> {
    return this.clustersRepository.create(clusters);
  }

  @get('/clusters/count', {
    responses: {
      '200': {
        description: 'Clusters model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Clusters)) where?: Where<Clusters>,
  ): Promise<Count> {
    return this.clustersRepository.count(where);
  }

  @get('/clusters', {
    responses: {
      '200': {
        description: 'Array of Clusters model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Clusters)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Clusters)) filter?: Filter<Clusters>,
  ): Promise<Clusters[]> {
    return this.clustersRepository.find(filter);
  }

  @patch('/clusters', {
    responses: {
      '200': {
        description: 'Clusters PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clusters, {partial: true}),
        },
      },
    })
    clusters: Clusters,
    @param.query.object('where', getWhereSchemaFor(Clusters)) where?: Where<Clusters>,
  ): Promise<Count> {
    return this.clustersRepository.updateAll(clusters, where);
  }

  @get('/clusters/{id}', {
    responses: {
      '200': {
        description: 'Clusters model instance',
        content: {'application/json': {schema: getModelSchemaRef(Clusters)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Clusters> {
    return this.clustersRepository.findById(id);
  }

  @patch('/clusters/{id}', {
    responses: {
      '204': {
        description: 'Clusters PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clusters, {partial: true}),
        },
      },
    })
    clusters: Clusters,
  ): Promise<void> {
    await this.clustersRepository.updateById(id, clusters);
  }

  @put('/clusters/{id}', {
    responses: {
      '204': {
        description: 'Clusters PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() clusters: Clusters,
  ): Promise<void> {
    await this.clustersRepository.replaceById(id, clusters);
  }

  @del('/clusters/{id}', {
    responses: {
      '204': {
        description: 'Clusters DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.clustersRepository.deleteById(id);
  }
}
