import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';

import { SequelizeConfig } from 'sequelize-typescript/lib/types/SequelizeConfig';
import { V0MODELS } from './controllers/v0/model.index';
import { memoryUsage } from 'process';

const c = config.dev;


 
  export const datasourceFactory = async () => {
    const config = {
      dialect: c.dialect,
      database:  c.database,
      host:  c.host,
     
      username:  c.username,
      password: c.password,
      storage: ':memory:',
      // east eight area time
  
    } as SequelizeConfig;
    const sequelizeInstance = new Sequelize(config);
    sequelizeInstance.addModels(V0MODELS);   

    await sequelizeInstance.sync({alter:true });

    return sequelizeInstance
}