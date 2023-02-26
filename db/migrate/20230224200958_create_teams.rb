class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams, id: false, primary_key: :team, id: false, primary_key: :team_id do |t|
      t.integer :team_id, unique: true
      t.string :name
      t.string :logo

      t.timestamps
    end
  end
end
