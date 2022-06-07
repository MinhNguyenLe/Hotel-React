export function formatBaseUrlFromAPI(str) {
  const splitWith_ = str.split("_")
  const splitWithDot = splitWith_[1].split(".")

  return splitWith_[0] + "." + splitWithDot[1]
}