class HikeController < ApplicationController

  def index
   @hikes = Hike.all
  end


  def show
   @hike = Hike.find(params[:id])
  end

  def new
    @hike = Hike.new
  end

  def create
    @hike = Hike.create hike_params
    if @hike.valid?
      redirect_to hikes_path
    else
      redirect_to new_hike_path
    end
  end

  def edit
    @hike = Hike.find(params[:id])
  end

  def update
    @hike = Hike.find(params[:id])
    @hike.update(hike_params)
     if @hike.valid?
      redirect_to hikes_path
    else
      redirect_to new_hike_path
    end
  end

  def destroy
    @hike = Hike.find(params[:id])
    if @hike.destroy
      redirect_to hikes_path
    end
  end

  private
    
    def hike_params
      params.require(:hike).permit(:name, :difficulty, :hike_distance)
    end
 
end
