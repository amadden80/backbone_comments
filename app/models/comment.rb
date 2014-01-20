class Comment < ActiveRecord::Base
  attr_accessible :message, :slug, :title
end
