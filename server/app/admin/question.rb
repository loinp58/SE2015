ActiveAdmin.register Question do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end
    permit_params :description, :image_url, :kind, :score, answers_attributes: [ :value, :is_correct ]

    belongs_to :category
    sidebar "Question Details", only: [:show, :edit] do
    link_to "Answers", admin_question_answers_path(question)
end

    index do
    selectable_column
    id_column
    column :description
    column :image_url
    column :kind
    column :score
    column :updated_at
    column "Answers" do |question|
      link_to "Answers", admin_question_answers_path(question)
    end
    actions
  end

  form do |f|
    f.inputs 'Questions details' do
      f.input :description
      f.input :kind
      f.input :score
      f.has_many :answers do |answer|
        answer.input :choice
        answer.input :is_correct
      end
    end
    f.actions
  end
end
