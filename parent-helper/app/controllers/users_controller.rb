class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
    def index
        @users = User.all
        render json: {message: "ok", users: @users}
    end

    def show
        begin
            @user = User.find(params[:id])
            render json: { message: "ok", user: @user}
        rescue ActiveRecord::RecordNotFound
            render json: { message: "No user matches that ID" }, status: 404
        rescue StandardError => e
            render json: { message: e.to_s }, status: 500
        end
    end

    def create
        puts "creating user"
        puts params
          @user = User.new(user_params)
        puts "??"
          if @user.save
            render json: { message: "ok", user: @user }
          else 
            render json: { message: @user.errors }, status: 500
          end
    end

    def update
        if @user.update(user_params)
            render json: { message: "ok", user: @user }
        else
            render json: { message: @user.errors }, status: 500
        end
    end

    def destroy
        @user.destroy
        render json: { message: "ok"}
    end

    private

    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:username, :email, :password)
    end
end
