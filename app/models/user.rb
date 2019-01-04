# frozen_string_literal: true

class User < ActiveRecord::Base

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :liked_posts, Array

  def self.random_post(ids)
    ids = ids.empty? ? [0] : ids
    Post.where('id NOT IN (?)', ids).order('RANDOM()')
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids 
    Post.where('id IN (?)', ids)
  end
end
