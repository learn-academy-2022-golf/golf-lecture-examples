class CreateHikes < ActiveRecord::Migration[7.0]
  def change
    create_table :hikes do |t|
      t.string :name
      t.float :hike_distance
      t.integer :difficulty

      t.timestamps
    end
  end
end
