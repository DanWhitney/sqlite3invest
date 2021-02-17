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
}).then(async conntection => {


    let photoRepository = conntection.getRepository(Photo)

    let allPhotos = await photoRepository.find();
    console.log("All photos from the db: ", allPhotos);
    
    let firstPhoto = await photoRepository.findOne(1);
    console.log("First photo from the db: ", firstPhoto);

    let dogsAndMePhoto = await photoRepository.findOne({name: 'Me and Dogs'});
    console.log("Dog and me photo from the db: ", dogsAndMePhoto);



}).catch(error => console.log(error))