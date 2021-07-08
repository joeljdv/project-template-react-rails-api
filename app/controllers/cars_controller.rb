class CarsController < ApplicationController
    before_action :authorize

    def index
        user = User.find_by(id: session[:user_id])
        cars = user.cars
        render json: cars
    end

    def create
        user = User.find_by(id: session[:user_id])
        cars = user.cars.create(cars_params)
        if car.valid?
            render json: cars, status: :created
        else 
            render json: {errors: car.errors.full_messages},  status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        car = user.cars.find_by(id: params[:id])
        if car
            render json: car
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def update

    end

    def destroy
        user = User.find_by(id: session[:user_id])
        car = user.cars.find_by(id: params[:id])

    end

    private

    def cars_params
        params.permit(:name, :make, :year, :image)
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
