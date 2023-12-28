// models/CommitteeMembers.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/database';
import ChitFundCommittee from './ChitFundCommitee'; 
import Members from './Members'; 

interface CommitteeMembersAttributes {
    committee_id?: number;
    member_id?: number;
    role: string;
    joined_date: Date;
}

class CommitteeMembers extends Model<CommitteeMembersAttributes> implements CommitteeMembersAttributes {
    public committee_id!: number;
    public member_id!: number;
    public role!: string;
    public joined_date!: Date;
}

CommitteeMembers.init(
    {
        committee_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: ChitFundCommittee,
                key: 'committee_id',
            },
        },
        member_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Members,
                key: 'member_id',
            },
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        joined_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'CommitteeMembers',
        timestamps: false, 
    }
);

export default CommitteeMembers;
