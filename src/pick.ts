export default function pick(obj: { [key: string]: string }, properties: string[]) {
  return properties.reduce((acumulator: { [key: string]: string }, property: string) => {
    if (obj.hasOwnProperty(property)) {
      acumulator[property] = obj[property]
    }
    return acumulator
  }, {})
}
