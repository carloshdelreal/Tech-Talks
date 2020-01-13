module Api 
  module V1
    class TalksController < ApplicationController
      def index
        @talks = Talk.all
        
        if user_signed_in?
          render json: @talks
        else
          render json: {}, status: 401
        end
      end
    end
  end
end