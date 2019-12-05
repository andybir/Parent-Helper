# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "andyb", email: "abirosak@gmail.com", password: "password")
User.create(username: "lauram", email: "lmariani123@gmail.com", password: "password")
User.create(username: "birdieb", email: "birdieb@gmail.com", password: "password")

puts "#{User.count} users created!"
puts ""

# Post.create(title: "Fun party", content: "Come to my fun part on Friday. It's going to be a blast!", subject: "Events", user_id: 1, topic_id: 2 )
# Post.create(title: "Happy hour", content: "let's meet up at the bar to have some happy hour and celebrate the weekend!!!", subject: "Events", user_id: 1, topic_id: 1)
# Post.create(title: "plumber", content: "Anyone need a recommendation for a plumber?  I've got a great one named Luigi.", subject: "Household", user_id: 1, topic_id: 3)

puts "#{Post.count} posts created!"

# Topic.create(subject: "General Advice", description: "Ask questions about child behavior. Or topics like pregnancy and relationship advice")
# Topic.create(subject: "Events", description: "Post here for topics relating to events going on in your neighborhood.")
# Topic.create(subject: "Home Improvement", description: "Post here to recommend or not recommend a handymen.")


puts "#{Topic.count} topics created"

# Comment.create(title: "I agree with you", content: "I definitely agree with your post. It's the best post I've ever read. I wish I had written it myself. I'm soooo jealous.", post_id: 1)

puts "#{Comment.count} comments created"
