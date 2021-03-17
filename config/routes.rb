Rails.application.routes.draw do
root 'landing_pages#show'
  resources :users
  resources :doctors do
    resources :appointments
  end
end