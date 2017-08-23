class Section::SortBy < SitePrism::Section
  element :by_title, :xpath,  ".//*[contains(text(), 'Title')]"
  element :by_release_date, :xpath,  ".//*[contains(text(), 'Release')]"
  element :by_genre, :xpath,  ".//*[contains(text(), 'Genre')]"
end
