class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.integer :team_id, unique: true
      t.string :name
      t.string :logo

      t.timestamps
    end
  end
end
