class TeamGame < ApplicationRecord
  has_many :games
  has_many :teams

end
