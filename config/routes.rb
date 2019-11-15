Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :posts do
    resources :comments
  end
  resources :topics do
    resources :posts do
      resources :comments
    end
  end
  resources :comments
  # get 'topics/:id/posts/:id', to: 'topics#posts#show'
end
