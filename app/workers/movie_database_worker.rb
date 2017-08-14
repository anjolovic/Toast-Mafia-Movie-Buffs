class MovieDatabaseWorker
  include Sidekiq::Worker

  def perform
    MovieDatabaseBuilderService.process
  end
end
