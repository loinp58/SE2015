class YesnochoicesController < ApplicationController
  before_action :set_yesnochoice, only: [:show, :edit, :update, :destroy]

  # GET /yesnochoices
  # GET /yesnochoices.json
  def index
    @yesnochoices = Yesnochoice.all
  end

  # GET /yesnochoices/1
  # GET /yesnochoices/1.json
  def show
  end

  # GET /yesnochoices/new
  def new
    @yesnochoice = Yesnochoice.new
  end

  # GET /yesnochoices/1/edit
  def edit
  end

  # POST /yesnochoices
  # POST /yesnochoices.json
  def create
    @yesnochoice = Yesnochoice.new(yesnochoice_params)

    respond_to do |format|
      if @yesnochoice.save
        format.html { redirect_to @yesnochoice, notice: 'Yesnochoice was successfully created.' }
        format.json { render :show, status: :created, location: @yesnochoice }
      else
        format.html { render :new }
        format.json { render json: @yesnochoice.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /yesnochoices/1
  # PATCH/PUT /yesnochoices/1.json
  def update
    respond_to do |format|
      if @yesnochoice.update(yesnochoice_params)
        format.html { redirect_to @yesnochoice, notice: 'Yesnochoice was successfully updated.' }
        format.json { render :show, status: :ok, location: @yesnochoice }
      else
        format.html { render :edit }
        format.json { render json: @yesnochoice.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /yesnochoices/1
  # DELETE /yesnochoices/1.json
  def destroy
    @yesnochoice.destroy
    respond_to do |format|
      format.html { redirect_to yesnochoices_url, notice: 'Yesnochoice was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_yesnochoice
      @yesnochoice = Yesnochoice.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def yesnochoice_params
      params[:yesnochoice]
    end
end
