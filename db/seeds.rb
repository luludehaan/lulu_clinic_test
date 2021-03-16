# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
times = ['twelve', 'one', 'three']
5.times do
  doctor = Doctor.create(
    name: Faker::Name.name
  )

3.times do
  user = User.create(
    first_name: Faker::Name.first_name,
    Last_name: Faker::Name.last_name
  )

    Appointment.create(
      time: times.sample,
      doctor_id: doctor.id,
      user_id: user.id
    )
  end
end

  puts "Data Seeded"