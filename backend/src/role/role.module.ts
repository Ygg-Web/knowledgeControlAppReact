import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from './entities/role.model';
import { User } from 'src/user/entities/user.model';
import { UserRoles } from './entities/user-roles.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  exports: [RoleService],
})
export class RoleModule {}
