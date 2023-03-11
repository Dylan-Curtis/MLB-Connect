class ScoresController < ApplicationController
    def index        
        @scores = @user.scores
        total_wins =@scores.total_wins
        win_percentage = @scores.win_percentage
    
        render json: 
        { scores: @scores, total_wins: total_wins, win_percentage: win_percentage }, status: :ok
      end

    def create
        user = User.find_by(id: params[:user][:id])
        game = Game.find_by(id: params[:game][:id])
      
        if user.present? && game.present?
          score = Score.create(score_params.merge( user: @user, game: game))
          render json: score, status: :created
        else
          render json: { errors: ["User or Game not found"] }, status: :unprocessable_entity
        end 
    end     

    def update
      score = Score.update_score(params[:game_id], params[:value])
      if score
        render json: score
      else
        render json: { error: 'Score not found' }, status: :not_found
      end
    end

private 
    def score_params
      params.require(:score).permit(:time, game: [:id, :date], user: [:id, :name, :email])
    end

    def find_score
      @score = score = Score.find_by(game_id: game_id, user_id: user_id)
    end
     
end
