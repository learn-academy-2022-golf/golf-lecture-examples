# Active Record Migrations

Create a rails app:

`$ rails new learn_band -d postgresql -T`
`$ cd learn_band`
`$ rails db:create`


Check that server runs ok:
`$ rails s`

Create instances in rails database
- First go into `$ rails c`

> BandMember.create name: "Elyse", instrument: "keyboard"
> BandMember.create name: "Ciani", instrument: "Violin"
> BandMember.create name: "Ramirez", instrument: "Cowbell"
> BandMember.create name: "Charlie", instrument: "Digereedoo"


## Create a migration:

`$ rails g migration add_column_pay_to_band_member`

For change definitions available in Active Record, go to https://edgeguides.rubyonrails.org/active_record_migrations.html#using-the-change-method

```ruby
class AddColumnPayToBandMember < ActiveRecord::Migration[7.0]
  def change
  # when referencing a model as a symbol, use plural and snake casing
  # add_column :table_name, :column, :data_type
    add_column :band_members, :pay, :integer
  end
end
```

`$ rails db:migrate`

Update name of column in database:

`$ rails g migration change_name_of_pay_to_hourly_pay`

```ruby
class ChangeNameOfPayToHourlyPay < ActiveRecord::Migration[7.0]
  def change
    rename_column :band_members, :pay, :hourly_pay
  end
end
```

`$ rails db:migrate`

IMPORTANT: Never modify or delete a migration file that has been migrated to the database!  

- Your migration folder tells a story on how your database has been structured and modifying old migration files will create a butterfly effect to the timelines resulting in tricky errors.


Update data type of column in database:

`$ rails g migration change_data_type_of_pay_to_float`

```ruby 
class ChangeDataTypeOfPayToFloat < ActiveRecord::Migration[7.0]
  def change
    change_column :band_members, :hourly_pay, :float
  end
end

```

`$ rails db:migrate`



