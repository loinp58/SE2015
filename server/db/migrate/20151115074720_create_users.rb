class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :facebook_id
      t.string :avatar
      t.integer :highscore
      t.text :description
      
      t.timestamps null: false
    end
  end
end
