class AddStartToDegrees < ActiveRecord::Migration[7.0]
  def change
    add_column :degrees, :start, :string
  end
end
