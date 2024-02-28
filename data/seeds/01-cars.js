// STRETCH
const cars = [
    {
        vin: '111111111111',
        make: "toyota",
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmisson: 'manual',
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

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    })
}