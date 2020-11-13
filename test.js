import csslog from './csslog.js'

const { Slog, Clog } = csslog
const slog = new Slog()
const clog = new Clog()

slog.error('Server error message')
clog.error('Client error message')

console.log('\u001b[40m\u001b[32m A \u001b[41;1m B \u001b[42m C \u001b[43m D \u001b[0m')