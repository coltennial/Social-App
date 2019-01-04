Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :posts, only: [:index, :update]
    get 'my_posts', to: 'posts#my_posts'

    resources :users, only: [:index]
    get 'all_users', to: 'users#all_users'
  end

end
