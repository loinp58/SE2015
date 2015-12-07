class AddUrlToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :urlImage, :string
  end
end
