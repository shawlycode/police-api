import { StatementModel } from "../models/statement_model.js";

//controllers take all the functions in the route and control the application

//how to add data in the db using the createMethod
export const addStatement = async (req, res) => {
  //add async await

  try {
    console.log('request', req.body)
    const addData = await StatementModel.create(req.body)
    res.status(200).send(addData);

  } catch (error) {
    console.log(error)

  }
}

//how to get all statement using the find method
export const getAllStatement = async (req, res, next) => {
  try {
    console.log('request', req.body)
    const getStatement = await StatementModel.find()
    res.status(200).send(getStatement)
  } catch (error) {
    next(error)
  }

}

//find statement by ID using the findById

export const getStatementById = async (req, res, next) => {
  try {
    console.log('request', req.body)
    const getSingleStatement = await StatementModel.findById(req.params.id)
    res.status(200).send(getSingleStatement)
  } catch (error) {
    next(error)

  }
}

//update a statement by ID

export const updateById = async (req, res, next) => {
  const status = req.body.caseStatus
  console.log('request', status)
  try {
    const updateStatementById = await StatementModel.findByIdAndUpdate(req.params.id, { caseStatus: status })
    res.status(200).send(updateStatementById)
  } catch (error) {
    next(error)

  }
}


//delete a statement by ID
export const deleteById = async (req, res, next) => {
  try {
    console.log('request', res.body)

    const deleteStatementById = await StatementModel.findByIdAndDelete(req.params.id)
    res.status(200).send('statement deleted successfully', deleteStatementById)

  } catch (error) {
    next(error)
  }
}