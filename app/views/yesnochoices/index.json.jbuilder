json.array!(@yesnochoices) do |yesnochoice|
  json.extract! yesnochoice, :id
  json.url yesnochoice_url(yesnochoice, format: :json)
end
