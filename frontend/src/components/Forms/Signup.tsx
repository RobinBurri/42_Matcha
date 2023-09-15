import { useFormik } from 'formik'

import * as Yup from 'yup'

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min( 8,'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters')
                .max(30, 'Not more than 30 characters')
                .required('Required'),
        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-600">
                    First Name
                </label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500 text-sm mt-1">
                        {formik.errors.firstName}
                    </div>
                ) : null}
            </div>

            <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-600">
                    Last Name
                </label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-500 text-sm mt-1">
                        {formik.errors.lastName}
                    </div>
                ) : null}
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">
                    Email Address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-sm mt-1">
                        {formik.errors.email}
                    </div>
                ) : null}
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 text-sm mt-1">
                        {formik.errors.password}
                    </div>
                ) : null}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
                Submit
            </button>
        </form>
    )
}

export default SignupForm
