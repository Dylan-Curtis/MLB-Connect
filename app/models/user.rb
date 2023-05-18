class User < ApplicationRecord
    has_secure_password
    has_many :scores, dependent: :destroy
    has_many :games, through: :scores
    validates :email, uniqueness: true
end

