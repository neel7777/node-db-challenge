
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, task_description: 'watch tkit videos', completed: false},
        {id: 2, project_id: 2, task_description: 'put ingredients together and turn on oven', completed: false},
        {id: 3, project_id: 3, task_description: 'make bed', completed: false}
      ]);
    });
};
