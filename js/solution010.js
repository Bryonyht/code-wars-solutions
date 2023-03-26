function remove (string) {
  
  let a = string.length
  
  if (string.endsWith("!")){
      string = string.slice(0, a-1)
      }
  return string;
}