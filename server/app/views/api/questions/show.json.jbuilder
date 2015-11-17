json.questions @questions do |q|
  json.(q, :description, :kind, :score)
  json.answers q.answers do |a|
    json.(a, :choice, :is_correct)
  end
end
