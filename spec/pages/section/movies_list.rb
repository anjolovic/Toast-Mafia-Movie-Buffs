class Section::MoviesList < SitePrism::Section
  sections :movie, Section::Movie, ".Movie"
end
