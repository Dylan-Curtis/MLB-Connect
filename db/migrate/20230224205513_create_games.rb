class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.integer :team1 
      t.integer :team2 
      t.integer :team3 
      t.integer :team4 
      t.integer :team5 
      t.integer :team6 
      t.timestamp :game_time

      t.timestamps
    end
  end
end
