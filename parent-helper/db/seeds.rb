# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.create(username: "andyb", email: "abirosak@gmail.com", password: "password")
# User.create(username: "lauram", email: "lmariani123@gmail.com", password: "password")
# User.create(username: "birdieb", email: "birdieb@gmail.com", password: "password")

# puts "#{User.count} users created!"

Post.create(title: "Fun party", content: "Come to my fun part on Friday. It's going to be a blast!", subject: "Events", )
Post.create(title: "Happy hour", content: "let's meet up at the bar to have some happy hour and celebrate the weekend!!!", subject: "Events")
Post.create(title: "plumber", content: "Anyone need a recommendation for a plumber?  I've got a great one named Luigi.", subject: "Household")

puts "#{Post.count} posts created!"