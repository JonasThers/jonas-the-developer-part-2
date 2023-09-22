class CreateWorkExperiences < ActiveRecord::Migration[7.0]
  def change
    create_table :work_experiences do |t|
      t.string :title
      t.string :workplace

      t.timestamps
    end
  end
end
