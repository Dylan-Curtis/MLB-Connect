class CreateGame < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.references :team1, null: false, foreign_key: true
      t.references :team2, null: false, foreign_key: true
      t.references :team3, null: false, foreign_key: true
      t.references :team4, null: false, foreign_key: true
      t.references :team5, null: false, foreign_key: true
      t.references :team6, null: false, foreign_key: true
      t.timestamp :game_time

      t.timestamps
    end
  end
end
