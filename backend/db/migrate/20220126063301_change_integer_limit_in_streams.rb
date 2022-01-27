class ChangeIntegerLimitInStreams < ActiveRecord::Migration[6.1]
  def change
    change_column :streams, :userId, :string
  end
end
