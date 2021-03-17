class User < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :doctors, through: :appointments
 def full_name
    "#{self.first_name} #{self.Last_name}"
  end
end
