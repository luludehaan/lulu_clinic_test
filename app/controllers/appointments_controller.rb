class AppointmentsController < ApplicationController
before_action :set_doctor
  def index
    @eights = @doctor.appointments.where(time: 'eight')
    @elevens = @doctor.appointments.where(time: 'eleven')
    @twos = @doctor.appointments.where(time: 'two')
    @fours = @doctor.appointments.where(time: 'four')
    render component: "Appointments", props: { 
      doctor: @doctor, eights: @eights, elevens: @elevens, twos: @twos, fours: @fours, users: User.all
    }
  end
  def new
    @appointment = @doctor.appointments.new 
    @users = User.all - @doctor.users
    render component: "AppointmentNew", props: { doctor: @doctor, appointment: @appointment, users: @users }
  end
  def create 
    @appointment = @doctor.appointments.new(appointment_params)
    if @appointment.save
      redirect_to doctor_appointments_path(@doctor)
    else
      @users = User.all - @doctor.users
      render component: "DoctorNew", props: { doctor: @doctor, appointment: @appointment, users: @users }
    end
  end
  def edit
    @appointment = Appointment.find(params[:id])
    render component: "AppointmentEdit", props: { doctor: @doctor, appointment: @appointment, users: @users }
  end
  def destroy
    @appointment = @doctor.appointments.find(params[:id])
    @appointment.destroy
    redirect_to doctor_appointments_path(@doctor)
  end
  private 
    def set_doctor
      @doctor = Doctor.find(params[:doctor_id])
    end
    def appointment_params
      params.require(:appointment).permit(:time, :user_id)
    end
end