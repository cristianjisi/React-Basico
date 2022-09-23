import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Task } from "../models/task.class";
import { LEVELS } from "../models/enum/levels.enum";
// import "../styles/taskRegisterForm.scss";

const FormFormik = () => {
	const taskSchema = Yup.object().shape({
		name: Yup.string()
			.min(6, "Name is too short")
			.max(20, "Name is too long")
			.required("Name is required"),
		description: Yup.string()
			.min(6, "Description is too short")
			.max(20, "Description is too long")
			.required("Description is required"),
		level: Yup.string()
			.oneOf(
				[LEVELS.NORMAL, LEVELS.BLOQUING, LEVELS.URGENT],
				"Only can select Normal, Bloquing, or Urgent"
			)
			.required("Level field is required."),
	});
	const initialValues = {
		name: "Formik",
		description: "Formulario con Formik",
		level: LEVELS.NORMAL,
		completed: false,
	};


	
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={taskSchema}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				alert(JSON.stringify(values, null, 2));

				//  We save the data in the localStorage
				localStorage.setItem("credentials", values);
			}}
		>
			{({ touched, errors, isSubmitting }) => (
				<div>
					<Form className={"form"}>
						<h2>Task Form</h2>
						<div className={"form-prim-field"}>
							{/* <label htmlFor="name"></label> */}
							<Field id="name" name="name" placeholder="Name" type="text" />
						</div>
						<div className={"form-prim-field"}>
							{/* <label htmlFor="description"></label> */}
							<Field
								id="description"
								name="description"
								placeholder="Description"
								type="text"
							/>
						</div>

						<div className={"form-prim-field"}>
							{/* <label htmlFor="level"></label> */}
							<Field
								component="select"
								id="level"
								name="level"
								placeholder="Level"
								type="text"
							>
								<option value={LEVELS.NORMAL}>Normal</option>
								<option value={LEVELS.BLOQUING}>Bloquing</option>
								<option value={LEVELS.URGENT}>Urgent</option>
							</Field>
						</div>

						<div className={"form-prim-field"}>
							<button type="submit">Register Task</button>
						</div>
						<div className={"form-prim-field"}>
							<div className={"error-field"}>
								{errors.description && touched.description && (
									<ErrorMessage
										name="description"
										component="div"
									></ErrorMessage>
								)}
							</div>
							<div className={"error-field"}>
								{errors.name && touched.name && (
									<ErrorMessage name="name" component="div"></ErrorMessage>
								)}
							</div>
						</div>
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default FormFormik;
