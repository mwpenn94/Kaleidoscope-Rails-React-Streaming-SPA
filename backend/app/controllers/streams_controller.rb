class StreamsController < ApplicationController
    def index
        @streams = Stream.all
        render :json => @streams.to_json 
    end

    def show
        @stream = Stream.find(params[:id])
        render :json => @stream.to_json 
    end

    def new
        @stream = Stream.new(stream_params)
        print @stream.to_json
        render :json => @stream.to_json 
    end

    def create
        @stream = Stream.create!(stream_params)
        print @stream.to_json
        render :json => @stream.to_json 
    end

    def edit
        @stream = Stream.find(params[:id])
        render :json => @stream.to_json 
    end

    def update
        @stream = Stream.find(params[:id])
        @stream.update(stream_params)
        render :json => @stream.to_json 
    end

    
    def destroy
        @stream = Stream.find(params[:id])
        @stream.destroy
        render :json => @stream.to_json 
    end
    
    private
    def stream_params
        params.require(:stream).permit(:title, :description, :userId)
    end
end
