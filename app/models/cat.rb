class Cat < ApplicationRecord
  enum :category, [:color, :breed]
end
