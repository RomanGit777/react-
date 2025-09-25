import './style-Array-Courses.css'
import {coursesArray} from "../../data/data.ts";
import { ArrayCourse } from '../Array-Course/Array-Course.tsx';

export const ArrayCourses = () => {
    return (
        <div>
            {
                coursesArray.map((course, i) =>
                <ArrayCourse key={i} course={course}>
                    <li>
                        {course.modules}
                    </li>

                </ArrayCourse>)
            }
        </div>
    );
};
