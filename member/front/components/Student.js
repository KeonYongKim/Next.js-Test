import React from 'react';

function Student({ student }) {
    return (
        <div>
            <h4>이름 : { student.name }</h4>
            <h4>나이 : { student.age }세</h4>
            <h4>이메일 : { student.email }</h4>
            <hr />
        </div>
    );
}

export default Student;