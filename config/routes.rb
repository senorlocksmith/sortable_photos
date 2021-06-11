Rails.application.routes.draw do
  resources :projects, only: [:sort_attachments, :delete_image] do
  collection do
    patch 'projects/sort/:id', action: :sort_attachments, as: 'sort_attachments'
    delete '/projects/:id/images/:image_id', action: 'delete_image', as: 'delete_image'
  end
end
resources :projects do
end
  root to: 'projects#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
