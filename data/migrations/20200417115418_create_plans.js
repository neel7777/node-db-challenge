
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl=>{
        tbl.increments()
        tbl.string('project_name', 255).notNullable().unique()
        tbl.string('project_description')
        tbl.boolean('completed').notNullable().defaultTo(false);
    })

    .createTable('resources', tbl=>{
        tbl.increments()
        tbl.string('resource_name', 255).notNullable().unique()
        tbl.string('resource_description')
        
    })

    .createTable('tasks', tbl=>{
        tbl.increments()
        tbl.integer('project_id')
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
        .onUpdate("CASCADE")        
        tbl.string('task_description')
        tbl.boolean('completed').notNullable().defaultTo(false);
    })

    .createTable('project_resources', tbl=>{
        tbl.integer('project_id')
        .references('id')
        .inTable('projects')
        .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
        .onUpdate("CASCADE")
        tbl.integer('resource_id')
        .references('id')
        .inTable('resources')
        .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
        .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
};
