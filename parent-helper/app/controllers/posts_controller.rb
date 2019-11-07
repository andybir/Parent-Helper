class PostsController < ApplicationController
    def index
        @posts = Post.all
        render json: { message: "ok", posts: @posts }
    end
end
