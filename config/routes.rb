BackboneComments::Application.routes.draw do
  get '/comments' => 'comments#index'
end