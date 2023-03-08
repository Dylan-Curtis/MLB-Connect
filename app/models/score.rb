class Score < ApplicationRecord
  belongs_to :user
  belongs_to :game
  validates :game_id, uniqueness: true

  def self.destroy
    # user_id=@user.id
    where(user_id: @user.id).delete_all.delete_all
  end


  def self.total_wins
    total_wins = where("time > ?", 0).count
  end

  def self.win_percentage
    if total_wins != 0
      wins=self.total_wins.to_f
      games=self.total_games.to_f
      (((wins/games) * 100).round(2).to_s) + "%"
    else
      "0%"
    end
  end 

  def self.total_games
    total_games = count
  end
end
