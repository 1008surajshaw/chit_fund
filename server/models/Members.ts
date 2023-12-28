// models/Members.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/database';

interface MembersAttributes {
    member_id?: number;
    name: string;
    email: string;
    phone_number?: string;
    address?: string;
    password: string; 
}

class Members extends Model<MembersAttributes> implements MembersAttributes {
    public member_id!: number;
    public name!: string;
    public email!: string;
    public phone_number!: string;
    public address!: string;
    public password!: string; 
}

Members.init(
    {
        member_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        phone_number: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.TEXT,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
    },
    {
        sequelize,
        modelName: 'Members',
    }
);

export default Members;
