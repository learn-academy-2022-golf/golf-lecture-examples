class AddColumnPayToBandMember < ActiveRecord::Migration[7.0]
  def change
    add_column :band_members, :pay, :integer
  end
end
