class AddEndAndStartAndTechnologiesUsedToWorkExperiences < ActiveRecord::Migration[7.0]
  def change
    add_column :work_experiences, :start, :string
    add_column :work_experiences, :end, :string
    add_column :work_experiences, :technologies_used, :string
  end
end
