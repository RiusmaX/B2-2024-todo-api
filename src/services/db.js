const mongoose = require('mongoose')

async function init () {
  try {
    await mongoose.connect(
      'mongodb+srv://todoApp:sJab3013wdQi3aHo@b2-cluster.yhcf0i7.mongodb.net/Todos?retryWrites=true&w=majority&appName=B2-Cluster'
    )
    console.info('MongoDB connected')
  } catch (error) {
    console.error(error)
  }
}

function close () {
  mongoose.connection.close()
}

module.exports = {
  init,
  close
}
