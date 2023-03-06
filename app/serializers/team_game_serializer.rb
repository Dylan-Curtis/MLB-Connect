class TeamGameSerializer < ActiveModel::Serializer
  attributes :id
  has_one :team
  has_one :game
end
