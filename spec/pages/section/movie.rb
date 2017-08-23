class Section::Movie < SitePrism::Section
  element :title, "h4.card-title"
  element :release_date, ".MovieDetailsCard .release-date"
  element :genres, ".MovieDetailsCard .movie-genres"

  section :bottom_links, Section::BottomLinks, ".BottomLinks"
  section :review_section, Section::ReviewComments, ".review-comments"
  section :poster_section, Section::Poster, ".MoviePoster"


  elements :stars, ".Rating"
  element :email, "input.form-control"
  element :review, "textarea.form-control"
end
