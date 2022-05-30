# Greetings Controller
class V1::GreetingsController < ApplicationController
  def index
    greeting = Greeting.find(rand(1..Greeting.count))

    render json: { greetings: [
      {
        message: greeting.message
      }
    ] }.to_json
  end
end
