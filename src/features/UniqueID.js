export default () => {
  let UUID = Math.floor(Math.random() * 1000000000)
  const UUIDBindings = new Set()

  return {
    UUID,
    UUIDBindings
  }
}
