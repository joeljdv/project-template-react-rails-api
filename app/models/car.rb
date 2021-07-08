class Car < ApplicationRecord
    belongs_to :user
    validates :name, presence: true
    validates :year, presence: true
    validates :make, presence: true
    validates :image, presence: true
end
