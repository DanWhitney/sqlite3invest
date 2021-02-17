import "reflect-metadata"
import { Photo } from "./entities/Photo"
import { createConnection } from "typeorm"


createConnection({
    type: 'sqlite',
    database: `./db/photos.db`,
    entities: [
        Photo
    ],
    synchronize: true,
    logging: true
}).then ( async conntection => {

    let photo = new Photo()
    photo.name = "Me and Dogs"
    photo.description = "Sky, Cooper and I"
    photo.filename = "sky_and_cooper.jpgs"
    photo.views = 1;
    photo.isPublished = true

    let photoRepository = conntection.getRepository(Photo)

    //let acturalSaved = await photoRepository.save(photo);
    let acturalSaved = await photoRepository.save(photo);
    
 

    console.log("Photo has been saved: " ,acturalSaved);
    console.log("Photo has been saved: " ,photo);

    let savedPhotos = await photoRepository.find();
    console.log("All photos from the db: ", savedPhotos)

}).catch(error => console.log(error))