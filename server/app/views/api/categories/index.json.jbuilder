json.categories @categories do |category|
  json.(category, :id, :name, :urlImage)
end
