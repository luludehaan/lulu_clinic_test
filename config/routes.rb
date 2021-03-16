Rails.application.routes.draw do

  # root 'users#index'
  root 'doctors#index'

  resources :users 
  resources :doctors do
    resources :appointments
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
