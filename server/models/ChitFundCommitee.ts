// models/ChitFundCommittee.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/database';
import Members from './Members';

interface ChitFundCommitteeAttributes {
    committee_id?: number;
    committee_name: string;
    description?: string;
    start_date?: Date;
    member?: number; 
    start_month?: string;
    leader_id?: number;
}

class ChitFundCommittee extends Model<ChitFundCommitteeAttributes> implements ChitFundCommitteeAttributes {
    public committee_id!: number;
    public committee_name!: string;
    public description!: string;
    public start_date!: Date;
    public member!: number;
    public start_month!: string;
    public leader_id!: number;
}

ChitFundCommittee.init(
    {
        committee_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        committee_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        start_date: {
            type: DataTypes.DATE,
        },
        member: {
            type: DataTypes.INTEGER,
            references: {
                model: Members,
                key: 'member_id', 
            },
        },
        start_month: {
            type: DataTypes.STRING,
        },
        leader_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        modelName: 'ChitFundCommittee',
    }
);

export default ChitFundCommittee;
