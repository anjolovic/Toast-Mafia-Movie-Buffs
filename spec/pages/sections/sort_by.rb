class Section::SortBy < SitePrism::Section
  element :by_title, :xpath,  ".//*[contains(text(), 'Title')]"
  element :by_release_date, :xpath,  ".//*[contains(text(), 'Release')]"
  element :by_popularity, :xpath,  ".//*[contains(text(), 'Popularity')]"
end
