class BlogPost < ApplicationRecord
  validates :author, :content, :simple_date, presence: true
  validates :author, length: { minimum: 3 }
  validates :content, length: { minimum: 200 }
end
