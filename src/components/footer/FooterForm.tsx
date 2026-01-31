import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    email: z.string().email("Invalid email address"),
    terms: z.literal(true, "You must agree to the terms"),
});

type FormFields = z.infer<typeof schema>;

const FooterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });
    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
    };

    return (
        <form
            className="footer__form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                {...register("email")}
                type="email"
                className={`footer__input${errors.email ? " footer__input_error" : ""}`}
                placeholder="Enter your e-mail"
            />
            {errors.email && (
                <div className="footer__error">{errors.email.message}</div>
            )}
            <label className="footer__check-block" htmlFor="footer__checkbox">
                <input
                    {...register("terms")}
                    className="footer__checkbox"
                    type="checkbox"
                    id="footer__checkbox"
                />
                I agree with the <a href="#">terms</a>
            </label>
            {errors.terms && (
                <div className="footer__error">{errors.terms.message}</div>
            )}
            <button disabled={isSubmitting} className="footer__btn">
                submit
            </button>
        </form>
    );
};

export default FooterForm;
