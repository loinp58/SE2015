class MultiplechoicesController < ApplicationController
  def new
    #@multiplechoice = Multiplechoice.new(multiplechoice_params)
        @multiplechoice = Multiplechoice.new
  end
  def index
    
    @multiplechoices = Multiplechoice.all
  end

  def create
    @multiplechoice = Multiplechoice.new(multiplechoice_params)
        #@multiplechoice = Multiplechoice.new(params[:multiplechoice])
    if @multiplechoice.save
      redirect_to @multiplechoice
    else
      render'new'
    end 
  end
  def edit
    @multiplechoice = Multiplechoice.find(params[:id])
  end

  def update
    @multiplechoice = Multiplechoice.find(params[:id])
 
  if @multiplechoice.update(multiplechoice_params)
    redirect_to @multiplechoice
  else
    render 'edit'
  end

  end

  def show
    @multiplechoice = Multiplechoice.find(params[:id])
  end
  def destroy
    @multiplechoice = Multiplechoice.find(params[:id])
    @multiplechoice.destroy
    redirect_to multiplechoices_path
  end

  def delete
  end
  private
  def multiplechoice_params
    params.require(:multiplechoice).permit(:content,:score,:A,:B,:C,:D,:Answer)
  end
end
