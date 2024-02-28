// STRETCH
const cars = [
    {
        vin: '111111111111',
        make: "toyota",
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '111111111112',
        make: "toyota",
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '111111111113',
        make: "volkswagon",
        model: 'jetta',
        mileage: 15000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}