class Question < ActiveRecord::Base
  belongs_to :category
  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers, allow_destroy: true
  
  validates :description, :kind, :score, presence: true
  validates :score, numericality: {greater_than: 0}
end
