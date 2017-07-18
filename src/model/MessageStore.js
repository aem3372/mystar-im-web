let messages = []

export default class MessageStore {
  addNewMessage (message) {
    messages.push(message)
  }
  getRawMessages () {
    return messages
  }
}
