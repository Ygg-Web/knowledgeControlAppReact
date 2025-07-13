import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { QuestionModule } from './question/question.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { User } from './user/entities/user.model';
import { Task } from './tasks/entities/task.model';
import { RoleModule } from './role/role.module';
import { Role } from './role/entities/role.model';
import { UserRoles } from './role/entities/user-roles.model';
import { Question } from './question/entities/question.model';
import { Answer } from './question/entities/answer.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, Task, Question, Answer],
      autoLoadModels: true,
    }),
    UserModule,
    RoleModule,
    TasksModule,
    QuestionModule,
    AuthModule,
  ],
})
export class AppModule {}
