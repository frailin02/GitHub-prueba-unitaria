const hola = require('./githubActions');
test('comprar el mesanje',()=>{
    expect(hola()).toBe('hola');
});