class ScoresController < ApplicationController
    def index
        render json: @user.scores.all, status: :ok
    end   
end
