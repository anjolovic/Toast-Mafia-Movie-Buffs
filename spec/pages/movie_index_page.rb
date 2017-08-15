class MovieIndexPage < SitePrism::Page
  set_url "/movies"

  element :navbar, "nav"
  section :sort_by_section, Section::SortBy, ".MovieIndex .SortBy"
end
