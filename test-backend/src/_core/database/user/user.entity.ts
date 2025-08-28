import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({  })
  id: number;

  @Column({ type: "varchar", length: 100 })
  email: string;

  @Column({ type: "varchar", length: 64 })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  viewModel() {
    return {
      id: this.id,
      email: this.email
    }
  }
}
