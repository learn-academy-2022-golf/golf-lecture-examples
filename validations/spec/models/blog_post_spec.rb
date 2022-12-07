require 'rails_helper'

RSpec.describe BlogPost, type: :model do
  # describe 'Blog Model' do
    # it 'Loads a blog post correctly' do
    #   blog_post = BlogPost.create author: "ASRW", content: "lorem OH MAN THIS IS GONNA BE A LONG TEXT THING  ipsumlorem OH MAN THIS IS GONNA BE A LONG TEXT THING  ipsumlorem OH MAN THIS IS GONNA BE A LONG TEXT THING  ipsumlorem OH MAN THIS IS GONNA BE A LONG TEXT THING  ipsumlorem OH MAN THIS IS GONNA BE A LONG TEXT THING  ipsumlorem OH MAN THIS IS GONNA BE A LONG TEXT THING  ipsumlorem OH MAN THIS IS GONNA BE A LONG TEXT THING  ipsumlorem OH MAN THIS IS GONNA BE A LONG TEXT THING  ipsumlorem OH MAN THIS IS GONNA BE A LONG TEXT THING  ipsumlorem OH MAN THIS IS GONNA BE A LONG TEXT THING  ipsum", simple_date: Date.today

    #   p blog_post.id

    #   expect(BlogPost.all).to_not be_empty
    # end
    it 'throws an error if there is no author' do
      blog_post = BlogPost.create author: nil, content: "lorem ipsum", simple_date: Date.today

      p blog_post.errors[:author]

      expect(blog_post.errors[:author]).to_not be_empty
    end
    it 'throws an error if there is no content' do
      blog_post = BlogPost.create author: "Nemo", simple_date: Date.today

      p blog_post.errors[:content]

      expect(blog_post.errors[:content]).to_not be_empty
    end
    it 'throws an error if there is no simple_date' do
      blog_post = BlogPost.create author: "Nemo", content: "lorem ipsum"

      p blog_post.errors[:simple_date]

      expect(blog_post.errors[:simple_date]).to_not be_empty
    end
    it 'throws an error if the authors name is less than three characters' do
      blog_post = BlogPost.create author: "HI", content: "lorem ipsum", simple_date: Date.today

      p blog_post.errors[:author]

      expect(blog_post.errors[:author]).to_not be_empty
    end
    it 'throws an error if there is not enough content (200 Char)' do
      blog_post = BlogPost.create author: "Nemo", content: "Lorem Ipsum", simple_date: Date.today

      p blog_post.errors[:content]
      expect(blog_post.errors[:content]).to_not be_empty
    end
  # end
end
