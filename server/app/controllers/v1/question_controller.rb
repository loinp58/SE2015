class V1::QuestionController < V1::BaseController
	def index
		questions = Question.all
		render json: questions

	end
	def show
		question = Question.find_by_id(params[:id])
		render json: question

	end
	def create
		question = Question.new(question_params)
    	if @question.save
    	  render json: @question, status: :created
    	else
      	  render json: @question.errors, status: :unprocessable_entity
    	end
 	end	
 	def update
 		question = Question.find_by_id(params[:id])
 		if question.update(question_params)
 			render json: question, status: 200
 		else
 			render json: question.errors, status: :unprocessable_entity
 		end
 	end	
	def destroy
		question = Question.find_by_id(params[:id])
		question.destroy
		head :no_content
	end

	private 
	def question_params
		params.require(:question).permit(:description,:kind,:score)
	end
end
