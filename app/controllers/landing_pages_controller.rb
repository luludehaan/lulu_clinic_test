class LandingPagesController < ApplicationController
  def show
    render component: "LandingPage"
  end
end
