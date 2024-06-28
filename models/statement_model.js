import { Schema, model } from "mongoose";

const statementSchema = new Schema({

  //using enum
  incidentId: { type: String, enum: ['non-criminal', 'criminal'] },
  civilianStatus: { type: String, enum: ['suspect', 'complainant', 'witness'] },
  statement: { type: String },
  caseStatus: { type: String, enum: ['open', 'closed'] },
  createdAt: { type: Date },
  updatedAt: { type: Date },
})

export const StatementModel = model('statement', statementSchema)