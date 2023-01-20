class CatsController < ApplicationController
  def index
    @q = Cat.ransack(params[:q])
    scope = @q.result
    @pagy, @cats = pagy(scope, items: 10)
  end
  
  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
  
  private

  def cat_params
  end

  def set_default_sort
    @q.sorts = "name asc" if @q.sorts.empty?
  end 
end
