module SortOnAssociation
  def order_by(field_and_order)
    field = field(field_and_order).try(:to_sym)

    if(sort_on_association(field))
      joins(field).order("#{field}.name #{sort_direction(field_and_order)}")
    else
      order(field_and_order)
    end
  end

  private

  def field(field_and_order)
    "#{field_and_order}".split(" ").first
  end

  def sort_direction(field_and_order)
    "#{field_and_order}".split(" ").last
  end

  def sort_on_association(field)
    reflect_on_all_associations.map(&:name).include?(field)
  end
end
