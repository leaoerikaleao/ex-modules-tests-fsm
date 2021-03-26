const juros = require('./juros')

test('jurosSimples', () => {
    const C = 100
    const i = 0.10
    const t = 1
    const jurosEsperados = 10
    const jurosCalc = juros.jurosSimples(C, i, t)
    expect(jurosCalc).toBe(jurosEsperados)
})

test('montanteTotal', () => {
    const C = 100
    const i = 0.10
    const t = 1
    const montanteEsperado = 110
    const jurosSimples = jest.fn()
    jurosSimples.mockImplementation(() => 10)
    const montanteTotal = juros.pure.montanteTotal({ jurosSimples })
    const montante = montanteTotal(C, i, t)
    expect(jurosSimples.mock.calls[0]).toEqual([C, i, t])
    expect(montante).toBe(montanteEsperado)
})
test('jurosSimples', () => {
    const C = 100
    const i = 0.10
    const t = 1
    const jurosEsperados = 10
    const jurosCalc = juros.jurosSimples(C, i, t)
    expect(jurosCalc).toBe(jurosEsperados)
})

test('montanteJurosCompostos', () => {
    const C = 1000
    const i = 0.10
    const t = 1

    const montanteCompostosEsperados = 1100
    const montanteCompostosCalc = juros.montanteJurosCompostos(C, i, t)
    expect(montanteCompostosCalc).toBe(montanteCompostosEsperados)
})