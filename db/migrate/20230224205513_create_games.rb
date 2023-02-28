class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.references :team1, null: false, foreign_key: { to_table: :teams } 
      t.references :team2, null: false, foreign_key: { to_table: :teams } 
      t.references :team3, null: false, foreign_key: { to_table: :teams } 
      t.references :team4, null: false, foreign_key: { to_table: :teams } 
      t.references :team5, null: false, foreign_key: { to_table: :teams } 
      t.references :team6, null: false, foreign_key: { to_table: :teams } 
      t.timestamp :game_time

      t.timestamps
    end
  end
end
 