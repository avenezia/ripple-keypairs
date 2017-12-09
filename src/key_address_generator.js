var assert = require('assert');
var ripple = require('./index.js')

function testSignature(keypair) {
    const message = 'Signature test'
    const signature = ripple.sign(message, keypair.privateKey)
    assert(ripple.verify(message, signature, keypair.publicKey))
}

const seed = ripple.generateSeed()
console.log('Seed: ' + seed)
const keypair = ripple.deriveKeypair(seed)

testSignature(keypair)

console.log('Public key: ' + keypair.publicKey)
console.log('Private key: ' + keypair.privateKey)
console.log('Ripple address: ' + ripple.deriveAddress(keypair.publicKey))