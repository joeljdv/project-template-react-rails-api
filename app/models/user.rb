class User < ApplicationRecord
    has_secure_password
    has_many :cars
    validates :username, presence: true, uniqueness: true
    validates_confirmation_of :password
    validates :password, presence: true, confirmation: true
    validates :password_confirmation, presence: true
end
