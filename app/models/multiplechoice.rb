class Multiplechoice < ActiveRecord::Base
	validates :content, presence: true,length: { minimum: 5 }
	validates :score, presence: true 
	validates :A, presence: true,length: { minimum: 5 }
	validates :B, presence: true,length: { minimum: 5 }
	validates :C, presence: true,length: { minimum: 5 }
	validates :D, presence: true,length: { minimum: 5 }
	validates :Answer, presence: true 
end
