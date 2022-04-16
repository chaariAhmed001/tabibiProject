import { Body, Controller, HttpStatus, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { LandlordService } from './landlord.service';
import { Landlord } from './schemas/landlord.schema';

@Controller('landlord')
export class LandlordController {
    constructor(private landlordService: LandlordService) { }

  
    @UseInterceptors(FileInterceptor('photos', 
    {
        storage: diskStorage({
            destination: 'C:/Tabibi/tabibi-front/public/landlordImg',
             filename: (req, file, cb) => {
                 cb(null, `${file.originalname}`)
             }
        })
    }
    ))
  @Post('/signUp')
  async addPost(@UploadedFiles() files: Array<Express.Multer.File>,@Res() res, @Body() landlord: Landlord) {
    console.log(files);
    const newLandlord = await this.landlordService.addLandlord(landlord);
    return res.status(HttpStatus.OK).json({
      message: 'Landlord has been submitted successfully!',
      post: newLandlord ,
    });
  }
  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }
}
