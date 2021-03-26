const { jurosCompostos } = require('./juros')
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

test('montanteJurosCompostos', () => {
    const C = 1000
    const i = 0.10
    const t = 1

    const montanteCompostosEsperados = 1100
    const montanteCompostosCalc = juros.montanteJurosCompostos(C, i, t)
    expect(montanteCompostosCalc).toBe(montanteCompostosEsperados)
})

test('jurosCompostos', () => {
    const C = 1000
    const i = 0.10
    const t = 1

    const jurosCompostosEsperados = 100
    const montanteJurosCompostos = jest.fn()
    montanteJurosCompostos.mockImplementation(() => 1100)
    //função pura injetada
    const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos })
    const jurosCalc = juros.jurosCompostos(C, i, t)

    expect(jurosCalc).toBe(jurosCompostosEsperados)


})