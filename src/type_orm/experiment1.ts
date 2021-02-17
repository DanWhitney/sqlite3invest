import "reflect-metadata"
import { createConnection } from "typeorm"
import { Photo } from "./entities/Photo"


createConnection({
    type: 'sqlite',
    database: `./db/photos.db`,
    entities: [
        Photo
    ],
    synchronize: true,
    logging: true
}).then (conntection => {

    let photo = new Photo()
    photo.name = "Me and Dogs"
    photo.description = "Sky, Cooper and I"
    photo.filename = "sky_and_cooper.jpgs"
    photo.views = 1;
    photo.isPublished = true

    let ret = conntection.manager
    .save(photo)
    .then(photo => {
        console.log(photo)
    })

}).catch(error => console.log(error))