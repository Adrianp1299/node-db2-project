const db = require('../../data/db-config ')

const getAll = () => {
  return db('cars')
}

const getById = () => {
  return db('cars').where('id', id).first()
}

const create = () => {
  const [id]
}
