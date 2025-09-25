import './style-Array-Courses.css'
import {coursesArray} from "../../data/data.ts";
import { ArrayCourse } from '../Array-Course/Array-Course.tsx';
import type {ICourses} from "../../Models/Array-Courses-model.ts";

export const ArrayCourses = () => {
    return (
        <div className='container'>
            {
                coursesArray.map((course: ICourses, i: number) =>
                <ArrayCourse key={i} course={course}>

                        Modules:
                    {course.modules.map((module: string, inx: number) => <li key={inx}>{module}</li>)}

                </ArrayCourse>)
            }
        </div>
    );
};
