class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :time
  has_one :user
  has_one :game
end
