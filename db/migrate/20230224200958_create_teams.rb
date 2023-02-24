class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.integer :id
      t.string :logo

      t.timestamps
    end
  end
end
