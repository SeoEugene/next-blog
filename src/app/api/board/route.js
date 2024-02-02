import prisma from "@/utils/connect"
import { NextResponse } from "next/server";

// 모든 게시글 가져오기
export const GET = async () => {
    try {
        const board = await prisma.board.findMany({
            include: {
                User: true
            }
        });

        return new NextResponse(
            JSON.stringify(board),
            { status: 200 }
        );

    } catch (e) {
        console.error(e);
        return new NextResponse(
            JSON.stringify({ message: "모든 게시글 가져오기 오류 발생" }),
            { status: 200 }
        );
    }
}