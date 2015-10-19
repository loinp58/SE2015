class CreateMultiplechoices < ActiveRecord::Migration
  def change
    create_table :multiplechoices do |t|
      t.text :content
      t.integer :score
      t.text :A
      t.text :B
      t.text :C
      t.text :D
      t.string :Answer

      t.timestamps null: false
    end
  end
end
