class CreateBlogPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :blog_posts do |t|
      t.string :author
      t.text :content
      t.date :simple_date

      t.timestamps
    end
  end
end
