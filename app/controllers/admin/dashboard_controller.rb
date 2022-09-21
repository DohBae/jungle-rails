class Admin::DashboardController < ApplicationController
  def show
    @inventory_count = Product.sum(:quantity)
    @category_count = Product.count(:category_id)
  end
end
