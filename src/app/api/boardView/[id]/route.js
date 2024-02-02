import prisma from "@/utils/connect"
import { NextResponse } from "next/server";

// 게시글 가져오기(상세페이지)
export const GET = async (req, { params }) => {
    const { id } = params;

    console.log(`전달받은 값: ${id}`)

    try {
        const board = await prisma.board.update({
            where: { id },
            data: { boardView: { increment: 1 } },
            include: { User: true }
        });

        return new NextResponse(
            JSON.stringify(board),
            { status: 200 }
        )
    } catch (e) {
        console.error(e)
        return new NextResponse(
            JSON.stringify({ message: "선택한 글 가져오기 오류 발생" }),
            { status: 400 }
        );
    }
}