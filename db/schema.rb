# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_02_24_210011) do

  create_table "games", force: :cascade do |t|
    t.integer "team1_id", null: false
    t.integer "team2_id", null: false
    t.integer "team3_id", null: false
    t.integer "team4_id", null: false
    t.integer "team5_id", null: false
    t.integer "team6_id", null: false
    t.datetime "game_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["team1_id"], name: "index_games_on_team1_id"
    t.index ["team2_id"], name: "index_games_on_team2_id"
    t.index ["team3_id"], name: "index_games_on_team3_id"
    t.index ["team4_id"], name: "index_games_on_team4_id"
    t.index ["team5_id"], name: "index_games_on_team5_id"
    t.index ["team6_id"], name: "index_games_on_team6_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "team_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "scores", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "game_id", null: false
    t.float "time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_scores_on_game_id"
    t.index ["user_id"], name: "index_scores_on_user_id"
  end

  create_table "teams", id: false, force: :cascade do |t|
    t.integer "team_id"
    t.string "name"
    t.string "logo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "games", "team", column: "team1_id"
  add_foreign_key "games", "team", column: "team2_id"
  add_foreign_key "games", "team", column: "team3_id"
  add_foreign_key "games", "team", column: "team4_id"
  add_foreign_key "games", "team", column: "team5_id"
  add_foreign_key "games", "team", column: "team6_id"
  add_foreign_key "players", "teams"
  add_foreign_key "scores", "games"
  add_foreign_key "scores", "users"
end
