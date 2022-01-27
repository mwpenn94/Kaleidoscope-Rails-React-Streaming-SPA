class AddUserIdToStreams < ActiveRecord::Migration[6.1]
  def change
    add_column :streams, :userId, :integer
  end
end
