class RemoveUserIdFromStreams < ActiveRecord::Migration[6.1]
  def change
    remove_column :streams, :user_id, :integer
  end
end
