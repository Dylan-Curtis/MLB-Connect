class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams, id: false, primary_key: :team, id: false, primary_key: :code do |t|
      t.integer :team_id, unique: true
      t.string :logo

      t.timestamps
    end
  end
end
