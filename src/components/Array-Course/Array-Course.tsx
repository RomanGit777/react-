import './style-Array-Course.css'
import type {ICourses} from "../../Models/Array-Courses-model.ts";
import type {FC, ReactNode} from "react";

interface ArrayCourseProps {
    course: ICourses,
    children: ReactNode
}

export const ArrayCourse: FC<ArrayCourseProps> = ({course, children}) => {
    return (
        <div className='m-6'>
            <h4>Title: {course.title}</h4>
            <p>Month duration: {course.monthDuration}</p> <p>Hour duration: {course.hourDuration}</p>
            <ul>{children}</ul>
        </div>
    );
};
