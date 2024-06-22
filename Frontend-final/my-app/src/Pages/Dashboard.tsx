import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/magicui/particles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/components/ui/theme-provider";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
	const { isSignedIn, userId } = useAuth();
	const [savedCourses, setSavedCourses] = useState<any[]>();
	const [completedCourses, setCompletedCourses] = useState<any[]>();
	const { theme } = useTheme();
  const {user} = useUser();
  let name= user?.fullName;
  name=name?.toUpperCase();

	useEffect(() => {
		const fetchSavedCourses = async () => {
			const response = await axios.get(
				`https://careetio.onrender.com/api/v1/account/savedCourses?userId=${userId}`
			);
			setSavedCourses(response.data.courses);
		};
		if(isSignedIn && userId ){
      fetchSavedCourses();
    }
	}, [isSignedIn, userId]);

	useEffect(() => {
		const fetchCompletedCourses = async () => {
			const response = await axios.get(
				`https://careetio.onrender.com/api/v1/account/completedCourses?userId=${userId}`
			);
			setCompletedCourses(response.data.courses);
		};
		if(isSignedIn && userId){
      fetchCompletedCourses();
    }
	}, [isSignedIn, userId]);

	return (
		<div>
			{theme === "dark" ? (
				<Particles className="fixed h-full w-full" quantity={200} />
			) : (
				<Particles
					quantity={200}
					className="fixed h-full w-full"
					color="#000000"
				/>
			)}
			<Navbar genAi={false} />
      <div className="flex justify-center items-center mt-10" >
      <p className="font-bold font-montserrat text-5xl" >Dashboard</p>
      </div>
      <div className="mx-20 mb-20" >
      <h1 className="font semi-bold font-montserrat text-xl mb-5 pl-10" >Welcome,</h1>
      <h1 className="font-bold font-montserrat text-4xl pl-10" >{name}</h1>
      </div>
			<div className="mt-20 relative flex justify-center items-center">
				<Tabs
					defaultValue="completed"
					className=" p-5  rounded-lg flex  flex-col  justify-center items-center"
				>
					<TabsList>
						<TabsTrigger value="completed">Completed Courses</TabsTrigger>
						<TabsTrigger value="saved">Saved Courses</TabsTrigger>
					</TabsList>
					<TabsContent value="completed" className="border-4 rounded-md ">
						<Table >
							<TableHeader>
								<TableRow>
									<TableHead>Course</TableHead>
									<TableHead>Date</TableHead>
									<TableHead className="text-right">Status</TableHead>
								</TableRow>
							</TableHeader>
            <TableBody>
								{completedCourses &&
									completedCourses.map((course: any, index: number) => {
										return (
											<TableRow key={index}>
												<TableCell>{course.CourseName}</TableCell>
                        <TableCell>{course.completionDate}</TableCell>
												<TableCell className="text-right text-green-300 ">completed</TableCell>
											</TableRow>
										);
									})}
							</TableBody>
						</Table>
					</TabsContent>
					<TabsContent value="saved" className="border-4 rounded-md " >
						<Table>
							<TableHeader>
								<TableRow>
                <TableHead>Course</TableHead>
									<TableHead className="text-right">Status</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
              {savedCourses &&
									savedCourses.map((course: any, index: number) => {
										return (
											<TableRow key={index}>
												<TableCell>{course.CourseName}</TableCell>
												{
                          course.progress === "true" ? (
                            <TableCell className="text-right text-green-300">completed</TableCell>
                          ) : (
                            <TableCell className="text-right text-red-300">pending</TableCell>
                          )
                        }
											</TableRow>
										);
									})}
							</TableBody>
						</Table>
					</TabsContent>
				</Tabs>
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
