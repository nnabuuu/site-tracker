import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Site {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    url: string;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        default: 0
    })
    lastCheck: number;

    @Column({
        default: 0
    })
    version: number;

    @Column({
        default: 1
    })
    enabled: boolean;
}