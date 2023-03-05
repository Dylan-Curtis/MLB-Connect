class Game < ApplicationRecord
  # attr_accessor :date
  has_many :scores  
  has_many :teams, through: :team_games 
  has_many :team_games
  has_many :users, through: :scores    

  
end
 