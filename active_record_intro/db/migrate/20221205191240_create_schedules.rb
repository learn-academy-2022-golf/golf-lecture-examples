class CreateSchedules < ActiveRecord::Migration[7.0]
  def change
    create_table :schedules do |t|
      t.date :day
      t.string :event
      t.string :day_of_the_week

      t.timestamps
    end
  end
end
