module Jekyll
  module ZipArrays
    def zip_arrays(input, array)
      return input.zip(array)
    end
  end
end

Liquid::Template.register_filter(Jekyll::ZipArrays)