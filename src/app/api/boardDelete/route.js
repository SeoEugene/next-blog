import prisma from "@/utils/connect"
import { NextResponse } from "next/server";

// 게시글 지우기
export const DELETE = async (req, { params }) => {
    const { id } = params;

    try {
        const board = await prisma.board.delete({
            where: { id },
        })

        return new NextResponse(
            JSON.stringify(board, { status: 200 })
        )
    } catch (e) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({ message: "게시글 삭제 중 오류 발생!!" }, { status: 400 })
        )
    }
}