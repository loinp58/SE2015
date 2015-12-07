class Category < ActiveRecord::Base
    has_many :questions, dependent: :destroy
    
    validates :name, :urlImage, presence: true
end
