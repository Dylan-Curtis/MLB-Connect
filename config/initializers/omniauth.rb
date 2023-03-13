Rails.application.config.middleware.use OmniAuth::Builder do
    provider :google_oauth2, "611735999133-91k8aa6jl0ekai3tumsdfqachphud4r6.apps.googleusercontent.com", "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" 
    # {
    #     scope: 'email, profile',
    #     prompt: 'select_account',
    #     image_aspect_ratio: 'square',
    #     image_size: 50
    #   }
  end
  OmniAuth.config.allowed_request_methods = %i[get]