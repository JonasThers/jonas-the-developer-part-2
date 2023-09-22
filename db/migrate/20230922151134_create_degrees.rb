class CreateDegrees < ActiveRecord::Migration[7.0]
  def change
    create_table :degrees do |t|
      t.string :title
      t.string :university

      t.timestamps
    end
  end
end
