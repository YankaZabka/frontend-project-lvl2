import yaml from "js-yaml"

const parse = (data, fileExt) => {
  if (fileExt === ".json") {
    return JSON.parse(data)
  } else if (fileExt === ".yml" || fileExt === ".yaml") {
    return yaml.load(data)
  }
  return null
}

export default parse
