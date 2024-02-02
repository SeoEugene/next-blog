"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function BoardDelete() {
    const router = useRouter();

    const deletePost = async (postId) => {
        if (!confirm('정말로 삭제하시겠습니까?')) {
            return;
        }

        try {
            const res = await fetch(`/api/boardDelete/${postId}`, {
                mehtod: "DELETE",
            });

            if (!res.ok) {
                throw new Error("게시글 삭제가 실패")
            }

            // 페이지 이동
            if (res.ok) {
                router.push('/board');
            } else {
                console.eroor('게시글 작성이 실패하였습니다.', result);
            }

            alert("게시글이 삭제되었습니다.")
            window.location.href = '/board';
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <button onClick={() => deletePost(id)}>BoardDelete</button>
    )
}
