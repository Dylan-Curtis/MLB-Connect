class GamesController < ApplicationController
    before_action :find_game, only: [:show]
    def index
        render json: Game.all, status: :ok
    end

    def show       
        render json: @game.team_games, status: :ok
    end  

    def self.current_streak
        latest_game = order(date: :desc).first
        return 0 unless latest_game
    
        current_streak = 1
        previous_date = Date.parse(latest_game.date)
    
        while Game.where(date: previous_date - 1.day).exists?
          current_streak += 1
          previous_date -= 1.day
        end
    
        current_streak

    private 
    def find_game        
        @game = Game.find_by_date(params[:date])
    end   
end