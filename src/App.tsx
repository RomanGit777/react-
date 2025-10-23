import { useForm } from "react-hook-form";

export const LoginForm = () => {
    // 🧩 useForm() gives you powerful helpers to manage form state
    // - register → connects inputs to the form
    // - handleSubmit → wraps your submit function and gives form data
    // - formState.errors → contains validation errors
    const { register, handleSubmit, formState: { errors } } = useForm();

    // 🧠 Function that runs when the form is successfully submitted
    const onSubmit = (data) => {
        console.log("Form data:", data); // ✅ 'data' contains all inputs as an object
    };

    return (
        // 🚀 handleSubmit() makes sure validation runs before calling onSubmit
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* 👇 Connect input to the form using register() */}
            {/* "email" is the name/key of this field in the final data */}
            {/* { required: true } adds simple built-in validation */}
            <input
                {...register("email", { required: true })}
                placeholder="Email"
            />
            {/* 🧱 If validation fails, errors.email will be truthy */}
            {errors.email && <span>Email is required</span>}

            {/* Same logic for the password field */}
            <input
                {...register("password", { required: true })}
                placeholder="Password"
            />
            {errors.password && <span>Password is required</span>}

            {/* Standard submit button */}
            <button type="submit">Login</button>
        </form>
    );
};
