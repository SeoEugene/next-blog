import React from 'react'
import Menu from '@/components/menu/Menu'
import BoardEdit from '@/components/board/BoardEdit';

export default function page({ params }) {
    const { id } = params;
    console.log(id)

    return (
        <main id='main'>
            <div className="main__header">
                <h2>#board Edit</h2>
                <Menu />
            </div>
            <div className='main__contents'>
                <section className='board__inner container'>
                    <BoardEdit id={id} />
                </section>
            </div>
        </main>
    )
}