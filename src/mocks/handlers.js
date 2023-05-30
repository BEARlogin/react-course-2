import { rest } from 'msw'

export const handlers = [
    rest.get('http://localhost:8000/books', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([{ title: 'Java', author: 'Javistus', _id: '1EcN2dBFThBvHujn' }, {
                author: 'Vladimir',
                title: 'JS',
                _id: 'B4Li8k79uFLthHkf'
            }, { author: 'Pushkin', title: 'Eugene Onegin', _id: 'DBHxziigSiIQsAGY' }, {
                author: 'Shevchenko',
                title: 'Kobzar',
                _id: 'Hr7co2zEo72bDDKk'
            }, { title: 'Timur', author: 'React', _id: 'WKiD2xJqCnlrIzir' }, {
                title: 'JUnit 5',
                author: 'Catalin Tudose',
                _id: 'XkjWxcMOiJ71tDm6'
            }, { author: 'Lermontov', title: 'Mzyri', _id: 'xqoikHbOfO5qnhm7' }])
        )
    })
]
