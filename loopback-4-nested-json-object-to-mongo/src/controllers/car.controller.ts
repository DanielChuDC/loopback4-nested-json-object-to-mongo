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
import {Cars} from '../models';
import {CarsRepository} from '../repositories';

export class CarController {
  constructor(
    @repository(CarsRepository)
    public carsRepository: CarsRepository,
  ) {}

  @post('/cars', {
    responses: {
      '200': {
        description: 'Cars model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cars)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cars),
        },
      },
    })
    cars: Omit<Cars, 'id'>,
  ): Promise<Cars> {
    return this.carsRepository.create(cars);
  }

  @get('/cars/count', {
    responses: {
      '200': {
        description: 'Cars model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Cars)) where?: Where<Cars>,
  ): Promise<Count> {
    return this.carsRepository.count(where);
  }

  @get('/cars', {
    responses: {
      '200': {
        description: 'Array of Cars model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cars)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Cars))
    filter?: Filter<Cars>,
  ): Promise<Cars[]> {
    return this.carsRepository.find(filter);
  }

  @patch('/cars', {
    responses: {
      '200': {
        description: 'Cars PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cars, {partial: true}),
        },
      },
    })
    cars: Cars,
    @param.query.object('where', getWhereSchemaFor(Cars)) where?: Where<Cars>,
  ): Promise<Count> {
    return this.carsRepository.updateAll(cars, where);
  }

  @get('/cars/{id}', {
    responses: {
      '200': {
        description: 'Cars model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cars)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Cars> {
    return this.carsRepository.findById(id);
  }

  @patch('/cars/{id}', {
    responses: {
      '204': {
        description: 'Cars PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cars, {partial: true}),
        },
      },
    })
    cars: Cars,
  ): Promise<void> {
    await this.carsRepository.updateById(id, cars);
  }

  @put('/cars/{id}', {
    responses: {
      '204': {
        description: 'Cars PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cars: Cars,
  ): Promise<void> {
    await this.carsRepository.replaceById(id, cars);
  }

  @del('/cars/{id}', {
    responses: {
      '204': {
        description: 'Cars DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.carsRepository.deleteById(id);
  }
}
