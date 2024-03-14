module.exports = function(eleventyConfig) {
     eleventyConfig.addPassthroughCopy('_src/js')
     eleventyConfig.addPassthroughCopy('_src/css')
     eleventyConfig.addPassthroughCopy('_src/images')
     return{
          dir: {
          input: "_src"
     }
     
     }
}