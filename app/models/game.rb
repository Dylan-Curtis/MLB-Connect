class Game < ApplicationRecord
  # attr_accessor :date
  has_many :scores, dependent: :destroy
  has_many :team_games, dependent: :destroy
  has_many :teams, through: :team_games 
  has_many :users, through: :scores    

  
end
 