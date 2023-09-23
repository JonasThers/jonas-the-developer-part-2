class DegreesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    degrees = Degree.all

    render json: degrees
  end

  def show
    degree = Degree.find(params[:id])

    render json: degree
  end

  def create
    degree = Degree.create!(degree_params)

    render json: degree, status: :created
  end

  def update
    degree = Degree.find(params[:id])
    degree.update!(degree_params)
    
    render json: degree
  end

  def destroy
    Degree.find(params[:id]).destroy
    head :no_content
  end
    
  private
  
  def degree_params
    params.permit(:title, :university, :elective, :start, :end)
  end
end
