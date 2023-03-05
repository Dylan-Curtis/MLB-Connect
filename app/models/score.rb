class Score < ApplicationRecord
  belongs_to :user
  belongs_to :game
  validates :game_id, uniqueness: true
end
