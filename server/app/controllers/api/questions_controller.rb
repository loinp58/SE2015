class Api::QuestionsController < ApplicationController
    def show
        @category = Category.find(params[:id]);
        @questions = @category.questions;
    end
end
