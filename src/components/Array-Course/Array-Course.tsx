import './style-Array-Course.css'
import type {ICourses} from "../../Models/Array-Courses-model.ts";
import type {FC, ReactNode} from "react";

interface ArrayCourseProps {
    course: ICourses,
    children: ReactNode
}

export const ArrayCourse: FC<ArrayCourseProps> = ({course, children}) => {
    return (
        <div>
            <h4>Title: {course.title}</h4>
            <p>Month duration: {course.monthDuration}</p> Hour duration:<p>{course.hourDuration}</p>
        </div>
    );
};
