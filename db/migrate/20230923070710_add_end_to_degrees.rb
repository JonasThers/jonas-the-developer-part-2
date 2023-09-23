class AddEndToDegrees < ActiveRecord::Migration[7.0]
  def change
    add_column :degrees, :end, :string
  end
end
