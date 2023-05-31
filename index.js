class Formatter {
  //add static methods here
  static capitalize(string) {
      // capitalizes first letter
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    // removes all non-alphanumeric characters except for dashes, single quotes and spaces.
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  //static titleize that takes in a string and capitalizes all words in a sentence 
  //except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
  static titleize(string) {
    const exceptWords = [ "the","a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const words = string.split(" ")
    const newWordArray = words.map((word)=>{
              if (exceptWords.includes(word)) {
                return word
              }
            else return this.capitalize(word)
            })
    newWordArray[0] = this.capitalize(newWordArray[0])
    return newWordArray.toString().replaceAll(",", " ")
  }
}


