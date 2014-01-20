
Comment.delete_all

500.times {

	comment = Comment.create({
		title: Faker::Company.catch_phrase,
		slug: Faker::Lorem.words((3..5).to_a.sample).join('-'),
		message: Faker::Lorem.paragraphs((2..5).to_a.sample).join(' ').chomp
	})

}