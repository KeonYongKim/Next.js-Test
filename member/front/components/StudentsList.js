import React from 'react';
import Student from './Student';

function StudentList() {
    const students = [
        {
            id: 'st001',
            name: '김남준',
            age: 28,
            email: 'rm@gmail.com'
        },
        {
            id: 'st002',
            name: '김석진',
            age: 30,
            email: 'jin@gmail.com'
        },
        {
            id: 'st003',
            name: '민윤기',
            age: 29,
            email: 'suga@gmail.com'
        },
        {
            id: 'st004',
            name: '정호석',
            age: 28,
            email: 'j-hope@gmail.com'
        },
        {
            id: 'st005',
            name: '박지민',
            age: 25,
            email: 'jm@gmail.com'
        },
        {
            id: 'st006',
            name: '김태형',
            age: 25,
            email: 'v@gmail.com'
        },
        {
            id: 'st007',
            name: '진정국',
            age: 23,
            email: 'jg@gmail.com'
        },
    ];
    
    /* const nextId = useRef(8);

    const onCreate = () => {
        //새롭게 배열 데이터를 추가하는 함수
        //...

        nextId.current += 1;
    } */

    return (
        <div>
            {students.map( student => (
                <Student student={ student } key={ student.id } />
            ))}
        </div>
    );
}

export default StudentList;