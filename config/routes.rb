Rails.application.routes.draw do
  
  resources :team_games
  resources :scores
  resources :players
  resources :teams
  resources :users
  resources :games,  except: [:show]
  get '/games/:date', to: 'games#show', as: 'date_game'
  post "/login", to: "sessions#login"
  post "/signup", to: "users#create"
  post "/newstat", to: "scores#create"
  delete "/logout", to: "sessions#logout"
  get "/authorized_user", to: "users#show" 
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? } 
# root 'pages#home'
end
