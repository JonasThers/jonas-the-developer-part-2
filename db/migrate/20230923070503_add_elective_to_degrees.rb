class AddElectiveToDegrees < ActiveRecord::Migration[7.0]
  def change
    add_column :degrees, :elective, :string
  end
end
