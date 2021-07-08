class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :name
      t.string :make
      t.string :year
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
