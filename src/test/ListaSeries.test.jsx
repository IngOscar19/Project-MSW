import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import ListaSeries from "../components/ListaSeries"

describe('Componente ListaSeries', () => {
    it('Debe renderizar todas las imágenes de las series', async () => {
        render(<ListaSeries />)

        const imagenes = await screen.findAllByRole('img')
        expect(imagenes).toHaveLength(15)
    })

    it('Debe renderizar todos los títulos de las series', async () => {
        render(<ListaSeries />)

        const titulos = await screen.findAllByRole('heading', { level: 2 })
        expect(titulos).toHaveLength(15)
    })

    it('Debe mostrar el título "Stranger Things"', async () => {
        render(<ListaSeries />)

        const tituloStranger = await screen.findByText('Stranger Things')
        expect(tituloStranger).toBeDefined()
    })

    it('Debe mostrar el creador "Frank Darabont, Angela Kang"', async () => {
        render(<ListaSeries />)

        const creadores = await screen.findByText(/Frank Darabont, Angela Kang/i)
        expect(creadores).toBeDefined()
    })

    it('Debe mostrar la puntuación 9.2', async () => {
        render(<ListaSeries />)

        const rating = await screen.findByText(/9\.2/)
        expect(rating).toBeDefined()
    })

    it('Debe mostrar el canal "Prime Video"', async () => {
        render(<ListaSeries />)

        const canales = await screen.findAllByText('Prime Video', { exact: false })
        expect(canales.length).toBeGreaterThan(0)
    })
})