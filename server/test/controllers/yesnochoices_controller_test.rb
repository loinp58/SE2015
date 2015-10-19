require 'test_helper'

class YesnochoicesControllerTest < ActionController::TestCase
  setup do
    @yesnochoice = yesnochoices(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:yesnochoices)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create yesnochoice" do
    assert_difference('Yesnochoice.count') do
      post :create, yesnochoice: {  }
    end

    assert_redirected_to yesnochoice_path(assigns(:yesnochoice))
  end

  test "should show yesnochoice" do
    get :show, id: @yesnochoice
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @yesnochoice
    assert_response :success
  end

  test "should update yesnochoice" do
    patch :update, id: @yesnochoice, yesnochoice: {  }
    assert_redirected_to yesnochoice_path(assigns(:yesnochoice))
  end

  test "should destroy yesnochoice" do
    assert_difference('Yesnochoice.count', -1) do
      delete :destroy, id: @yesnochoice
    end

    assert_redirected_to yesnochoices_path
  end
end
