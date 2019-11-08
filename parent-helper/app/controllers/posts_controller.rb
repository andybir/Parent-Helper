class PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]
    def index
        @posts = Post.all
        render json: { message: "ok", posts: @posts }
    end

    def show
        begin
            @post = Post.find(params[:id])
            render json: @post.to_json(:include => { :comments => { :only => [:title, :content] }})
        rescue ActiveRecord::RecordNotFound
            render json: { message: "No post matches that ID" }, status: 404
        rescue StandardError => e
            render json: { message: e.to_s }, status: 500
        end
    end

    def create
        puts "creating post"
        puts params
          @post = Post.new(post_params)
        puts "??"
          if @post.save
            render json: { message: "Post successfully created", post: @post }
          else
            render json: { message: @post.errors }, status: 500
          end
    end

    def update
        if @post.update(post_params)
            render json: { message: "ok", post: @post }
        else
            render json: { message: @post.errors }, status: 500
        end
    end

    def destroy
        @post.destroy
        render json: { message: "Post deleted" }
    end

    private

    def set_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.permit(:title, :content, :subject)
    end
end
