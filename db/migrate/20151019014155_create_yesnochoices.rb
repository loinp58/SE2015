class CreateYesnochoices < ActiveRecord::Migration
  def change
    create_table :yesnochoices do |t|

      t.timestamps null: false
    end
  end
end
