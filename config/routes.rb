Rails.application.routes.draw do


  root 'problems#index'

  get 'problems/list'
  get 'problems/searchTablet'
  post 'problems/searchEngine'
  get 'problems/getFoundList'
  resources :problems do

    member do
      get :delete
    end
  end

  resources :users do
    member do
      get :delete
      patch :publish
    end
  end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
