class CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :update, :destroy]
    def index
        @comments = Comment.all
        render json: { message: "ok", comments: @comments }
    end

    def show
        begin
            @comment = Comment.find(params[:id])
            render json: { message: "ok", comment: @comment }
        rescue ActiveRecord::RecordNotFound
            render json: { message: "No comment matches that ID" }, status: 404
        rescue StandardError => e
            render json: { message: e.to_s }, status: 500
        end
    end

    def create
        puts "creating comment"
        puts params
          @comment = Comment.new(comment_params)
        puts "??"
          if @comment.save
            render json: { message: "Comment successfully created", comment: @comment }
          else
            render json: { message: @comment.errors }, status: 500
          end
    end

    def update
        if @comment.update(comment_params)
            render json: { message: "ok", comment: @comment }
        else
            render json: { message: @comment.errors }, status: 500
        end
    end

    def destroy
        @comment.destroy
        render json: { message: "Comment deleted" }
    end

    private

    def set_comment
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.permit(:title, :content, :post_id, :topic_id)
    end
end
