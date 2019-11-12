class TopicsController < ApplicationController
    before_action :set_topic, only: [:show, :update, :destroy]
    def index
        @topics = Topic.all
        render json: { message: "ok", topics: @topics }
    end

    def show
        begin
            @topic = Topic.find(params[:id])
            # @posts = Post.all(topic_id)
            # render json: @posts
            render json: @topic.to_json(:include => { :posts => { :only => [:id, :title, :content] }})
        rescue ActiveRecord::RecordNotFound
            render json: { message: "No topic matches that ID" }, status: 404
        rescue StandardError => e
            render json: { message: e.to_s }, status: 500
        end
    end

    def create
        puts "creating topic"
        puts params
          @topic = Topic.new(topic_params)
        puts "??"
          if @topic.save
            render json: { message: "Topic successfully created", topic: @topic }
          else
            render json: { message: @topic.errors }, status: 500
          end
    end

    def update
        if @topic.update(topic_params)
            render json: { message: "ok", topic: @topic }
        else
            render json: { message: @topic.errors }, status: 500
        end
    end

    def destroy
        @topic.destroy
        render json: { message: "Topic deleted" }
    end

    private

    def set_topic
        @topic = Topic.find(params[:id])
    end

    def topic_params
        params.permit(:subject, :description)
    end
end
