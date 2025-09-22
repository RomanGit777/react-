import './courses-style.css'
import {coursesAndDurationArray} from "../../data/data.ts";
import type {ICourseModel} from "../../models/data-model.ts";
import {CourseComponent} from "../course-component/course-component.tsx";

export const CoursesComponent = () => {
    return (
        <ul>
            {
            coursesAndDurationArray.map((course: ICourseModel, index: number) => {
                return (
                    <CourseComponent course={course} key={index} />
                )
            })

            }
        </ul>
    );
};
