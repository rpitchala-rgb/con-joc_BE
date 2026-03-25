
import { Injectable } from '@nestjs/common';
import { CreateMockUserDto } from './dto/create-mock-user.dto';
import { UpdateMockUserDto } from './dto/update-mock-user.dto';
import { readFileSync, writeFileSync } from 'fs';
import { SearchMockUserDto } from './dto/search-mock-user.dto';
// import { OmniDatabaseServie } from '../../../shared/database/omni-database.service';
// import { AsteriskDatabaseServie } from 'src/shared/database/asterisk-database.service';
// import { AsteriskCdrDatabaseServie } from 'src/shared/database/asterisk-cdr-database.service';
// import { FreePbkDatabaseServie } from 'src/shared/database/free-pbk-database.service';
// import { PolarisDatabaseServie } from 'src/shared/database/polaris-database.service';
//import { TenantPrismaService } from 'src/shared/database1/tenant-prisma.service';
//import { ClusterClientsService } from 'src/shared/Tenant-db/cluster-clients.service';

@Injectable()
export class MockUserService {
  constructor(
    // private readonly omnidatabaseSerive: OmniDatabaseServie,
    // private readonly asteriskDb: AsteriskDatabaseServie,
    // private readonly asteriskcdrDb: AsteriskCdrDatabaseServie,
    // private readonly freepbkDb: FreePbkDatabaseServie,
    // private readonly polarisDb: PolarisDatabaseServie,
    //private readonly tenantPrisma: TenantPrismaService,
    // private readonly clusterClientsService: ClusterClientsService
  ) { }

  private filepath = 'src/modules/data/users.json';
  private filepath1 = 'src/modules/data/search.json';

  async getDetails(): Promise<any> {
    try {
      const getUser = readFileSync(this.filepath, 'utf-8');
      return JSON.parse(getUser);
    } catch (error) {
      throw new Error(error);
    }
  }

  async createUser(mockUserDto: CreateMockUserDto): Promise<any> {
    try {
      const readData = readFileSync(this.filepath, 'utf-8');
      const users = JSON.parse(readData);
      const userExists = users.some((user) => user.id === mockUserDto.id);
      if (userExists) {
        throw 'User Data Exists.';
      } else {
        users.push(mockUserDto);
        writeFileSync(this.filepath, JSON.stringify(users));
        return mockUserDto;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser(updateUserDto: UpdateMockUserDto, id: number): Promise<any> {
    try {
      const readData = readFileSync(this.filepath, 'utf-8');
      const users = JSON.parse(readData);

      const userIndex = users.findIndex((user) => user.id === Number(id));

      if (!userIndex || userIndex === -1) {
        throw 'User with this id is not present';
      }

      users[userIndex] = {
        ...users[userIndex],
        ...updateUserDto,
      };

      writeFileSync(this.filepath, JSON.stringify(users));

      return users[userIndex];
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(id: number): Promise<any> {
    try {
      const readData = readFileSync(this.filepath, 'utf-8');
      const users = JSON.parse(readData);

      const filteredData = users.filter((user) => user.id !== Number(id));
      writeFileSync(this.filepath, JSON.stringify(filteredData));
      return [];
    } catch (error) {
      throw new Error(error);
    }
  }

  async searchData(searchUserDto: SearchMockUserDto): Promise<any> {
    try {
      const { inputValue, page, limit } = searchUserDto;

      const readData = readFileSync(this.filepath1, 'utf-8');
      const data = JSON.parse(readData);

      // search in all fields
      const filteredData = data.filter((item: any) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(inputValue.toLowerCase()),
        ),
      );

      // pagination logic
      const startIndex = (page - 1) * limit;
      const paginatedData = filteredData.slice(startIndex, startIndex + limit);

      return {
        total: filteredData.length,
        page,
        limit,
        results: paginatedData,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // async asteriskData(): Promise<any> {
  //   try {
  //     const { asterisk } = await this.tenantPrisma.getClusterClients();
  //     const data = await asterisk.account_config.findFirst({
  //       where: {
  //         created_at: {
  //           gte: new Date('1000-01-01'),
  //         },
  //       },
  //     });

  //     if (data) {
  //       return data;
  //     } else {
  //       throw 'No data found in the database';
  //     }

  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }


  // async mockingClusters(): Promise<any> {
  //   try {
  //     const { asterisk, cdr, freepbx, omni, polaris } = await this.tenantPrisma.getClusterClients();
  //     const data: any = await omni.api_tokens.findMany();
  //     //const { asterisk, cdr, freepbx, omni, polaris } = await this.clusterClientsService.getClusterClients();
  //     const clusterClients = await this.clusterClientsService.getClusterClients();
  //     const data1: any = await clusterClients.omni.api_tokens.findMany();
  //     if (data.length > 0) {
  //       return data;
  //     } else {
  //       throw ('No data found in the database');
  //     }
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }
}
