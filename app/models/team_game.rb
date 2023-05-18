class TeamGame < ApplicationRecord
  belongs_to :game, dependent: :destroy
  belongs_to :team,dependent: :destroy
end
