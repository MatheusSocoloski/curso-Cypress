 /// <reference types="cypress" />

 it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect (a).to.be.equal(1);
    expect('a').not.to.be.equal('b')
 })

 it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
 })

 it('Object Equality', ()=> {
    const obj = {
        a:1,
        b:2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({a:1, b:2})
    expect(obj).eql({a:1, b:2})
    expect(obj).include({c:1})
    expect(obj).include({ a: 1 })
    expect(obj).to.have.property('b', 2)
    })