'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      
      return queryInterface.bulkInsert('pokemons', [{
        name: 'John Doe',
        type: "water",
        hp: 100,
        attack: 100,
        defense: 100,
        speed: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    
  }

};
