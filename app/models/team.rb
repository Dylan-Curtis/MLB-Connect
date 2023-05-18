class Team < ApplicationRecord
has_many :players, dependent: :destroy
has_many :team_games, dependent: :destroy

end
