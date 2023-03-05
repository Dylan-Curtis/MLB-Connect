class GamesController < ApplicationController
    before_action :find_game, only: [:show]
    def index
        render json: Game.all, status: :ok
    end

    def show       
        render json: @game, status: :ok
    end  

    private 
    def find_game        
        @game = Game.find_by_date(params[:date])
    end   
end