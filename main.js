const str = `
010-1234-5678
thepop11@gmail.com
http://www.omdbapi.com/?apikey=8bd90565&s=frozen
The quick brown fox jumps over the lazy dog
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)
