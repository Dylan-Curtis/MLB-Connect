class ScoresController < ApplicationController
    def index
        render json: @user.scores.all, status: :ok
    end 

    def create
        user = User.find_by(id: params[:user][:id])
        game = Game.find_by(id: params[:game][:id])
      
        if user.present? && game.present?
          score = Score.create(score_params.merge(user: user, game: game))
          render json: score, status: :created
        else
          render json: { errors: ["User or Game not found"] }, status: :unprocessable_entity
        end 
    end 
    #  def update
    #      @user.update(score_params)
    #      render json: @user, status: :ok
    #  end
    private 
       def score_params
        params.require(:score).permit(:time, game: [:id, :date], user: [:id, :name, :email])
     end
end
