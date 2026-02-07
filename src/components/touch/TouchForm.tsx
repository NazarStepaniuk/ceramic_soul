import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    question: z.string().min(10, "Question must be at least 10 characters"),
    terms: z.literal(true, "You must agree to the terms"),
});

type FormFields = z.infer<typeof schema>;

const TouchForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = () => {
        reset();
    };

    return (
        <form
            noValidate
            className="touch__form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <fieldset className="touch__fieldset">
                <div className="touch__input-block">
                    <label htmlFor="name" className="touch__label">
                        Name
                    </label>
                    <input
                        {...register("name")}
                        type="text"
                        id="name"
                        placeholder="Name"
                        className={`touch__input${errors.name ? " touch__input_error" : ""}`}
                    />
                    {errors.name && (
                        <div className="touch__error">
                            {errors.name.message}
                        </div>
                    )}
                </div>
                <div className="touch__input-block">
                    <label htmlFor="email" className="touch__label">
                        Email
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        id="email"
                        placeholder="Email"
                        className={`touch__input${errors.email ? " touch__input_error" : ""}`}
                    />
                    {errors.email && (
                        <div className="touch__error">
                            {errors.email.message}
                        </div>
                    )}
                </div>
            </fieldset>
            <label htmlFor="question" className="touch__label">
                Your question
            </label>
            <textarea
                {...register("question")}
                id="question"
                placeholder="Question"
                className={`touch__textarea${errors.question ? " touch__textarea_error" : ""}`}
            ></textarea>
            {errors.question && (
                <div className="touch__error">{errors.question.message}</div>
            )}
            <label
                className="touch__label touch__check-block"
                htmlFor="checkbox"
            >
                <input
                    {...register("terms")}
                    className="touch__checkbox"
                    type="checkbox"
                    id="checkbox"
                />
                I agree with the <a href="#">terms</a>
            </label>
            {errors.terms && (
                <div className="touch__error">{errors.terms.message}</div>
            )}
            <button disabled={isSubmitting} className="btn-send touch__btn">
                send request
            </button>
        </form>
    );
};

export default TouchForm;
