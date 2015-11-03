class V1::QuestionController < V1::BaseController
    def index
        questions = Question.all
    
        render json: questions, root: false
    end
end
