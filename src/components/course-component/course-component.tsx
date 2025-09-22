import './course-style.css'
import type {ICourseModel} from "../../models/data-model.ts";
import type {FC} from "react";

type CoursePropsType = {
    course: ICourseModel;
}

export const CourseComponent: FC<CoursePropsType> = ({course}) => {
    return (
        <li>
            {course.title} {course.monthDuration}
        </li>
    );
};
