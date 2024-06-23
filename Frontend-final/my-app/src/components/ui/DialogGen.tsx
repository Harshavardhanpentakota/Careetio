import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import React, { useState } from "react";
import axios from "axios";
import { Button } from "./button";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const DialogGen = ({ courseName }: { courseName: string }) => {
	interface Resource {
		title: string;
		url: string;
	}

	interface Topic {
		name: string;
		description: string;
		estimated_time: string;
		resources: Resource[];
	}

	interface Section {
		title: string;
		description: string;
		estimated_time: string;
		topics: Topic[];
	}

	interface CourseContent {
		title: string;
		sections: Section[];
	}

	interface Course {
		content: CourseContent[];
	}

	const [course, setCourse] = useState<CourseContent | null>(null);
	const { userId, isSignedIn } = useAuth();
	const [iscompleted, setIsCompleted] = useState(false);
	const navigate = useNavigate();
	const [isBookmarked, setIsBookmarked] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [error, setError] = useState<any>(null);

  useEffect(()=>{
    console.log({courseName})
  },[courseName])

	useEffect(() => {
		const CompletionStatusFetcher = async (
			userId: string,
			CourseName: string
		) => {
			try {
				const res = await axios.get(
					`https://careetio.onrender.com/api/v1/account/completion/?userId=${userId}&courseName=${CourseName}`
				);
				return res.data;
			} catch (err) {
				setError(err);
			}
		};
		if (isSignedIn && userId) {
			CompletionStatusFetcher(userId, courseName).then((result) => {
				const newResult = result.progress;
				setIsCompleted(newResult);
			});
		}
	}, [isSignedIn, userId]);

	useEffect(() => {
		const BookmarkStatusFetcher = async (
			userId: string,
			CourseName: string
		) => {
			try {
				const res = await axios.get(
					`https://careetio.onrender.com/api/v1/account/bookmark/?userId=${userId}&courseName=${CourseName}`
				);
				return res.data;
			} catch (err) {
				setError(err);
			}
		};
		if (isSignedIn && userId) {
			BookmarkStatusFetcher(userId, courseName).then((result) => {
				const newResult = result.saved;
				setIsBookmarked(newResult);
			});
		}
	}, [isSignedIn, userId]);

	const handleBookmark = async () => {
		if (!isSignedIn) {
			navigate("/signup");
			return;
		}
		const newIsBookmarked = !isBookmarked; //true
		setIsBookmarked(newIsBookmarked);
		toast(
			<div className="flex justify-between items-center">
				<p className="font-semibold font-montserrat">
					<span>Course </span>
					<span>{isBookmarked ? "saved" : "unsaved"}</span>
				</p>
				<Button onClick={handleUndoBookmark} className="mx-4">
					unsave
				</Button>
			</div>
		);
		try {
			await axios.post(
				`https://careetio.onrender.com/api/v1/account/bookmark/?userId=${userId}`,
				{ courseName, newIsBookmarked }
			);
		} catch (err) {
			setError(err as never);
		}
	};

	const handleUndoBookmark = async () => {
		const newIsBookmarked = !isBookmarked;
		setIsBookmarked(newIsBookmarked);
		toast.dismiss();
		try {
			await axios.post(
				`https://careetio.onrender.com/api/v1/account/bookmark/?userId=${userId}`,
				{ courseName, newIsBookmarked }
			);
		} catch (err) {
			setError(err as never);
		}
	};

	const handleMarkAsCompleted = async () => {
		if (!isSignedIn) {
			navigate("/signup");
			return;
		}
		const newIsCompleted = !iscompleted; //true
		setIsCompleted(newIsCompleted);
		toast(
			<div className="flex justify-between items-center">
				<p className="font-semibold font-montserrat">
					<span>Task marked as </span>
					<span>{iscompleted ? " incomplete" : "complete"}</span>
				</p>
				<Button onClick={handleUndo} className="mx-4">
					Undo
				</Button>
			</div>
		);
		try {
			await axios.post(
				`https://careetio.onrender.com/api/v1/account/completion/?userId=${userId}`,
				{ courseName, newIsCompleted }
			);
		} catch (err) {
			setError(err as never);
		}
	};

	const handleUndo = async () => {
		const newIsCompleted = !iscompleted;
		setIsCompleted(newIsCompleted);
		toast.dismiss();
		try {
			await axios.post(
				`https://careetio.onrender.com/api/v1/account/completion/?userId=${userId}`,
				{ courseName, newIsCompleted }
			);
		} catch (err) {
			setError(err as never);
		}
	};

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					onClick={async () => {
						try {
							const res = await axios.get(
								`https://careetio.onrender.com/api/v1/courses/description/?name=${courseName}`
							);
							setCourse(res.data.content[0]);
						} catch (err) {
							setError(err as never);
						}
					}}
				>
					{courseName}
				</Button>
			</DialogTrigger>
			{course ? (
				<DialogContent className="max-w-4xl p-7">
					<DialogHeader>
						<div className="flex justify-between">
							<DialogTitle className="font-montserrat font-bold text-3xl">
								{course.title}
							</DialogTitle>
							<div>
								<Button onClick={handleMarkAsCompleted} className="mr-7">
									{iscompleted ? "Mark as incomplete" : "Mark as completed"}
								</Button>
								<Button onClick={handleBookmark} className="mr-7">
									{isBookmarked ? "unsave" : "save"}
								</Button>
							</div>
						</div>
						<DialogDescription className="max-h-[70vh] overflow-y-auto p-4 ">
							{course.sections &&
								course.sections.map((section, index: number) => {
									return (
										<div key={index} className="mb-8">
											<p className="pb-2">
												<span className="font-bold font-montserrat text-2xl ">
													{section.title}
												</span>
											</p>
											<p className="pb-2">{section.description}</p>
											<p className="pb-2">
												<span className="font-bold">Estimated time: </span>{" "}
												<span>{section.estimated_time}</span>
											</p>
											<div>
												{section.topics &&
													section.topics.map((topic, index: number) => {
														return (
															<div key={index} className="pb-2">
																<p>
																	<span className="font-bold font-montserrat text-lg ">
																		{topic.name}:
																	</span>
																</p>
																<p>
																	<span className="font-bold">
																		Description:{" "}
																	</span>{" "}
																	<span>{topic.description}</span>
																</p>
																<p>
																	<span className="font-bold">
																		Estimated time:{" "}
																	</span>{" "}
																	<span>{topic.estimated_time}</span>
																</p>
																<p className="font-bold">Resources:</p>
																<ul className="list-disc ml-6">
																	{topic.resources &&
																		topic.resources.map(
																			(resourse, index: number) => {
																				return (
																					<li key={index}>
																						{" "}
																						<a key={index} href={resourse.url}>
																							{resourse.title}
																						</a>
																					</li>
																				);
																			}
																		)}
																</ul>
															</div>
														);
													})}
											</div>
										</div>
									);
								})}
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			) : (
				<DialogContent>
          <div className="flex justify-center items-center h-screen bg-white">
					<div role="status">
						<svg
							aria-hidden="true"
							className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
        </DialogContent>
			)}
		</Dialog>
	);
};

export default DialogGen;
