import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { LandlordService } from './landlord.service';
import { Landlord } from './schemas/landlord.schema';

@Controller('landlord')
export class LandlordController {
    constructor(private landlordService: LandlordService) { }
    
    @Post('/signUp')
    @UseInterceptors(FileInterceptor('photo', 
    {
        storage: diskStorage({
            destination: 'C:/Bohmid/Tabibi/tabibi-front/src/Imges/landlordImg',
             filename: (req, file, cb) => {
                 cb(null, `${file.originalname}`)
             }
        })
    }
    ))
  async addPost(@UploadedFiles() file,@Res() res, @Body() landlord: Landlord) {
    const newLandlord = await this.landlordService.addLandlord(landlord);
    return res.status(HttpStatus.OK).json({
      message: 'Landlord has been submitted successfully!',
      landlord: newLandlord ,
    });
  }
  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }
  @Get('/houses')
    async getHouses(@Res() res) {
      const houses = await this.landlordService.getHouses();
      return res.status(HttpStatus.OK).json(houses);
    }
  @Get(':email')
  async getPost(@Res() res, @Param('email') email) {
    const landlord =await this.landlordService.getOne(email);
    if (!landlord) {
        throw new NotFoundException('landlord does not exist!');
    }
    return res.status(HttpStatus.OK).json(landlord);
  }
  
}
