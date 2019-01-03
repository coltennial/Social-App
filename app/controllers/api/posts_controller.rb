class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post, only: [:show, :update, :destroy]

  def index 
    render json: User.random_post(current_user.liked_posts)
  end

  def show 
    render json: @post
  end

  def create 
    post = Post.new(post_params)
    if post.save 
      render json: post 
    else 
      render json: post.errors
    end
  end

  def update 
    current_user.liked_posts << params[:id].to_i
    current_user.save
  end

  def destroy 
    @post.destroy
  end

  def my_posts 
    render json: User.liked(current_user.liked_posts)
  end

  private 

    def set_post 
      @post = Post.find(params[:id])
    end

    def post_params 
      params.require(:post).permit(:title, :description)
    end
end
