import React from 'react'
import Menu from '@/components/menu/Menu'
import BoardDelete from '@/components/board/BoardDelete';

export default function page({ params }) {
    const { id } = params;
    console.log(id)

    return (
        <main id='main'>
            <div className="main__header">
                <h2>#board Delete</h2>
                <Menu />
            </div>
            <div className='main__contents'>
                <section className='board__inner container'>
                    <BoardDelete id={id} />
                </section>
            </div>
        </main>
    )
}