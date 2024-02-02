import React from 'react'
import Menu from '@/components/menu/Menu'
import BoardSearch from '@/components/board/BoardSearch'
import BoardList from '@/components/board/BoardList'
import BoardPage from '@/components/board/BoardPage'

export default function page() {
    return (
        <main id='main'>
            <div className="main__header">
                <h2>#board</h2>
                <Menu />
            </div>
            <div className='main__contents'>
                <section className='board__inner container'>
                    <BoardSearch />
                    <BoardList />
                    <BoardPage />
                </section>
            </div>
        </main>
    )
}