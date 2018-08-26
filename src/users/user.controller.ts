import {
  Controller,
  Get,
  UseGuards,
  Post,
  Body,
  Query,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  // @UseGuards(AuthGuard('jwt'))

  constructor(private users: UsersService) {}

  @Post()
  create(@Body() body) {
    return this.users.insert(body);
  }

  @Get()
  findAll(@Query() query) {
    return this.users.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.users.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() body) {
    return this.users.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.users.delete(id);
  }
}
