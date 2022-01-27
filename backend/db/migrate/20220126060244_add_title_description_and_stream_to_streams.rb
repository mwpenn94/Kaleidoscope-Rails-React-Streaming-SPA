class AddTitleDescriptionAndStreamToStreams < ActiveRecord::Migration[6.1]
  def change
    add_column :streams, :title, :string
    add_column :streams, :description, :string
    add_column :streams, :stream, :string
  end
end
