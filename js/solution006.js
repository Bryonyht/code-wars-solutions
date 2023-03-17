function arrayDiff(a, b) {
    return a.filter(x => b.indexOf(x)== -1)
  }