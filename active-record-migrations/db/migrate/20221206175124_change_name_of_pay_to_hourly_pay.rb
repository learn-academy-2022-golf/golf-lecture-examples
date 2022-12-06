class ChangeNameOfPayToHourlyPay < ActiveRecord::Migration[7.0]
  def change
    rename_column :band_members, :pay, :hourly_pay
  end
end
