Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get '/greeting', to: 'greetings#index'
  end
end
