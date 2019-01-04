class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  
  def index 
    render json: User.all
  end

  private

    def post_params 
      params.require(:post).permit(:title, :description)
    end

end
