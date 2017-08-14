namespace :util do
  task build_db: :environment do
    if Rails.env.production?
      MovieDatabaseWorker.perform_async
    else
      MovieDatabaseWorker.new.perform
    end
  end
end
