class User < ApplicationRecord
    has_secure_password
    has_many :cars
    validates :name, presence: true, uniqueness: true
end
