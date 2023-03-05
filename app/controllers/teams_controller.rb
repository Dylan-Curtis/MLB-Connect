class TeamsController < ApplicationController
    def show
        team= Team.find(params[:id])
        render json: team.players, status: :ok
    end  

end
