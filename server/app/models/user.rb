class User < ActiveRecord::Base
    validates :name, :highscore, :description, presence: true
end
