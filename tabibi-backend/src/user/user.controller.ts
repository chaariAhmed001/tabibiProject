import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put, Req, Res, Session, UnauthorizedException, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt'


import jwt from 'express-jwt';
import { Request } from 'express';
import console from 'console';
import { CookieAuthenticationGuard } from 'src/utils/guards/cookieAuthentication.guard';
import { JwtAuthGuard } from 'src/utils/guards/jwt-guard.guard';

@UsePipes( new ValidationPipe() )
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService,
        private jwtService: JwtService
        ){}

    @Post('/signup')
    async createUser(@Res() response, @Body() user: User){
        const newUser = await this.userService.createuser(user);
        return response.status(HttpStatus.CREATED).json({
            newUser
        })
    }
    @Post('/signin')
    async SignIn(@Res() response, @Body() user: User ,@Session() session: Record<string, any>) {
        const token = await this.userService.signin(user, this.jwtService);
        //response.cookie('jwt', token, {httpOnly: true});
        if(token){
            session.jwt = token;
            //stop make a new session id 
            //session.authenticated  = true;
            return response.status(HttpStatus.OK).json(token.message);
            
        }
        //console.log(token)
        //console.log(session.id)
         return {
             message: "succsses"
         }

    }
    @Get('/users')
    async fetchAll(@Res() response) {
        const users = await this.userService.readAll();
        return response.status(HttpStatus.OK).json({
            users
        })
    }
    @Get('/todayUsers')
    async getToDayUsers(@Res() response) {
        const users = await this.userService.getDayUsers();
        const date = new Date;
        return response.status(HttpStatus.OK).json({
            date : date.getFullYear() , 
            users
        })
    }
    
    @Get()
   async getUser(@Session() session) {
    try{
        const data = await this.jwtService.verifyAsync(session.jwt);
        if (!data) {
            throw new UnauthorizedException();
        }
        return(data);
    } 
    
    catch(e){
        throw new UnauthorizedException();
    }
  }
//   @Get(':email')
//     async getUserByEmail(@Param('email') userEmail){
//         const res = this.userService.getOne(userEmail);
//         return res;
//     }
    @Get(':email')
  async getPost(@Res() res, @Param('email') email) {
    const user =await this.userService.getOne(email);
    if (!user) {
        throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json(user);
  }
  @Get('/userType/:email')
  async getUserType(@Res() res,@Param('email') email) {
    const user = this.userService.getUserType(email);
    if (!user) {
        throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json(user);

  }

  @Post('logout')
  async logout(@Res({passthrough: true}) response) {
      response.clearCookie('connect.sid');

      return {
          message: 'success'
      }
  }
  @Put('/update/:id')
  async updateUser(@Res() res,@Param('id') userId,@Body() user: User) {
    const updateUser = await this.userService.updateUser(userId, user);
    if (!updateUser) {
        throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      user: updateUser,
    });
  }
  @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedUser = await this.userService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedUser
        })
    }
}