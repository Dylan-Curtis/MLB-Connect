class Game < ApplicationRecord
  belongs_to :team1, class_name: "Team"
  belongs_to :team2, class_name: "Team"
  belongs_to :team3, class_name: "Team"
  belongs_to :team4, class_name: "Team"
  belongs_to :team5, class_name: "Team"
  belongs_to :team6, class_name: "Team"
end
