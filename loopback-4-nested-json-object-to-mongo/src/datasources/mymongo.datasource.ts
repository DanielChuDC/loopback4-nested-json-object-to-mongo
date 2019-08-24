import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mymongo.datasource.json';

export class MymongoDataSource extends juggler.DataSource {
  static dataSourceName = 'mymongo';

  constructor(
    @inject('datasources.config.mymongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
