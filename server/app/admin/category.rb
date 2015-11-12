ActiveAdmin.register Category do

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
    permit_params :name
    sidebar "Category Details", only: [:show, :edit] do
    link_to "Questions", admin_category_questions_path(category)
end

    index do 
        selectable_column
       id_column
       column :name
       column :updated_at
       column "Questions" do |category|
       link_to "Questions", admin_category_questions_path(category)
    end
    actions
    end
end
