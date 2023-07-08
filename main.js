console.log("About to call wasm:");	

var importObject = { imports: { imported_func: arg => console.log(arg) } };
WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj => obj.instance.exports.exported_func());

console.log("Called!");	
