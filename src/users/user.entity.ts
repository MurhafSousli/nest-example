import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  role: string;
}