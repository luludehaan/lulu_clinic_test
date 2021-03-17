class User < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :doctors, through: :appointments
  validates :first_name, presence: true
 def full_name
    "#{self.first_name} #{self.Last_name}"
  end
end
