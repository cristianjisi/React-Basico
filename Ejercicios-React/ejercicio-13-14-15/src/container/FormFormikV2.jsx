import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useList from "../hooks/useList";
import { LEVELS } from "../models/enum/levels.enum";

// import "../styles/taskRegisterForm.scss";

const FormFormikV2 = () => {
	const taskSchema = Yup.object().shape({
		name: Yup.string()
			.min(3, "Name is too short")
			.max(10, "Name is too long")
			.required("Name is required"),
		description: Yup.string()
			.min(3, "Description is too short")
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
		name: "",
		description: "",
		level: LEVELS.NORMAL,
		completed: false,
	};
	const tasks = useList();

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={taskSchema}
				onSubmit={(values, actions) => {
					console.log(values);
					setTimeout(() => {
						tasks.push(values);
						actions.resetForm({});
						actions.setSubmitting(false);
					}, 500);
				}}
			>
				{({ errors }) => (
					<div className="form-body">
						<div className={"row"}>
							<div className={"form-holder"}>
								<div className={"form-content"}>
									<h3>Tasks Form with Formik</h3>
									<Form className="requires-validation" noValidate>
										<div className="col-md-12">
											<Field
												className={"form-control"}
												id="name"
												name="name"
												placeholder="Name"
												type="text"
											/>
											<div>{errors && errors.name}</div>
										</div>
										<div className="col-md-12">
											<Field
												className={"form-control"}
												id="description"
												name="description"
												placeholder="Description"
											/>
											<div>{errors && errors.description}</div>
										</div>

										<div className={"col-md-12 mt-3"}>
											<Field id="level" as="select" name="level">
												<option value={LEVELS.NORMAL}>Normal</option>
												<option value={LEVELS.BLOQUING}>Bloquing</option>
												<option value={LEVELS.URGENT}>Urgent</option>
											</Field>
										</div>
										<div className="form-button mt-3">
											<button
												id="submit"
												type="submit"
												className="btn btn-primary"
											>
												Add Task
											</button>
										</div>
									</Form>
								</div>
							</div>
						</div>
					</div>
				)}
			</Formik>
			{tasks.isEmpty() ? (
				<div style={{ padding: "10px", textAlign: "center" }}>
					Task List is Empty
				</div>
			) : (
				<table className={"taskList"}>
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Description</th>
							<th>Level</th>
						</tr>
					</thead>
					<tbody>
						{tasks.value.map((task, index) => (
							<tr key={index}>
								<td>
									<input
										type="checkbox"
										onClick={() => tasks.remove(index)}
										defaultChecked={false}
									/>
								</td>
								<td style={{ fontWeight: "bold", marginRight: "5px" }}>
									{task.name}
								</td>
								<td>{task.description}</td>
								<td>{task.level}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default FormFormikV2;
