class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :team
end
