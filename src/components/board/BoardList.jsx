"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function BoardList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/board');

                //데이터 요청 오류
                if (!res.ok) {
                    throw new Error("데이터를 가져오지 못했습니다.");
                }

                let result = await res.json();
                result = result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setData(result);
                console.log(result)
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [])

    return (
        <div className='board__list'>
            <table>
                <colgroup>
                    <col style={{ width: "5%" }} />
                    <col style={{ width: "63%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "7%" }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>등록자</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.boardNum}</td>
                            <td><Link href={`boardView/${item.id}`}>{item.boardTitle}</Link></td>
                            <td>{item.User.name}</td>
                            <td>{item.User.createdAt ? item.User.createdAt.substring(0, 10) : ""}</td>
                            <td>{item.User.boardView}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
