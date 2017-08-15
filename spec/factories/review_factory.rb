FactoryGirl.define do
  factory :movie_review do
    content { Faker::Lorem.sentence }
  end
end
