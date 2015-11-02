class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :description
      t.string :auth_token
      t.integer :point
      
      t.timestamps null: false
    end
  end
end
