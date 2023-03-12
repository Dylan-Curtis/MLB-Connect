class ScoresController < ApplicationController
  before_action :find_games, only: [:find_score]
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
          score = Score.create(score_params.merge( user: user, game: game))
          render json: score, status: :created
        else
          render json: { errors: ["User or Game not found"] }, status: :unprocessable_entity
        end 
    end  
   
    def destroy        
        @user.scores.destroy_all
        head :no_content, status: 204    
      end
      

      def update 
        user = User.find_by(id: params[:user][:id])
        game = Game.find_by(id: params[:game][:id])   
        score = Score.find_by(game: game, user: user) 
        score.update(score_params)
        render json: score, status: :ok
    end

    

private 
    def score_params
      params.require(:score).permit(:time, game: [:id, :date], user: [:id, :name, :email])
    end

    # def find_score
    #   Score.find_by(game_id: @game.id, user_id: @user.id)
    # end
     
end
