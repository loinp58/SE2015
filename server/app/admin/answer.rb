ActiveAdmin.register Answer do

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
    permit_params :choice, :is_correct
    
    belongs_to :question
    
    index do
        selectable_column
        id_column
        column :choice
        column :is_correct
        actions
    end
end
