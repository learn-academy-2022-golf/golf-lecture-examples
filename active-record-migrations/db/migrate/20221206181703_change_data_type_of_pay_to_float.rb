class ChangeDataTypeOfPayToFloat < ActiveRecord::Migration[7.0]
  def change
    change_column :band_members, :hourly_pay, :float
  end
end
