Rails.application.routes.draw do
  root 'welcome#welcome'
  
  devise_for :users

  namespace :api do 
    namespace :v1 do 
      resources :talks, only: [:index, :show]
      resources :the_users, only: [:index]
      resources :fav_talks, only: [:index, :update, :destroy]
    end 
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
