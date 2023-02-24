class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.references :user, null: false, foreign_key: true
      t.references :game, null: false, foreign_key: true
      t.float :time

      t.timestamps
    end
  end
end
