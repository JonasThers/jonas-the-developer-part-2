class WorkExperiencesController < ApplicationController

  def index
    work_experiences = WorkExperience.all

    render json: work_experiences
  end

  def show
    work_experience = WorkExperience.find(params[:id])

    render json: work_experience
  end

  def create
    work_experience = WorkExperience.create!(work_experience_params)
    render json: work_experience, status: :created
  end

  def update
    work_experience = WorkExperience.find(params[:id])
    work_experience.update!(work_experience_params)
    render json: work_experience
  end

  def destroy
    WorkExperience.find(params[:id]).destroy
    head :no_content
  end
  
  private
  
  def work_experience_params
    params.permit(:title, :workplace, :start, :end, :technologies_used)
  end
end
