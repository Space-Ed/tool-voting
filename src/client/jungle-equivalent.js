import { j, J } from 'jungle-core'
import { jungleDom, DomMount } from 'jungle-dom'

J.use(jungleDom)

J.sub('dom').sub('dice')
    .define('container', j('div', {
        class: 'dice',

        anon: [
            j('input', { type: 'number', value: 0, id: 'numSides' }),
        ]
    }

        .define('')
    ))



DomMount('jungle-mount', J.recover('container'))

