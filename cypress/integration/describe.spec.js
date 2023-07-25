/// <reference types="cypress" />

it.skip('A external test...', () => {

})

describe('Should group test...', ()=> {
    describe ('Should group more specfic tests...', () => {
        it('A specfici test', () => {

        })
    })

    describe('Should group more specific tests 2...', () => {
        it('A specfic test 2...', () => {

        })
    })

    it.skip('A internal test...', () => {

    })
})