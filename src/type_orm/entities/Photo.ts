
import { Entity, Column,PrimaryGeneratedColumn, PrimaryColumn, ColumnOptions, PrimaryColumnOptions } from "typeorm"
interface IPhoto {
    id?: number;
    name?: string;
    description?: string;
    filename?: string;
    views?: number;
    isPublished?: boolean;
}
@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    description: string;

    @Column('text')
    filename: string;

    @Column('integer')
    views: number;

    @Column('integer')
    isPublished: boolean;


}