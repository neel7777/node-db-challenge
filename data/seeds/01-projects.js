
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'code', project_description: 'go to lambda school', completed: false},
        {id: 2, project_name: 'eat', project_description: 'cook something', completed: false},
        {id: 3, project_name: 'sleep', project_description: 'go to bed', completed: false}
      ]);
    });
};
