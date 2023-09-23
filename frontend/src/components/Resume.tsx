import { useState, useEffect } from "react";
import { Experience } from "./Experience";

export interface EducationData {
  data: {
    title: string;
    university: string;
    elective: string;
    start: string;
    end: string;
  }[];
}

export interface WorkData {
  data: {
    title: string;
    workplace: string;
    technologies_used: string;
    start: string;
    end: string;
  }[];
}

export const Resume: React.FC = () => {
  const [loadingWork, setLoadingWork] = useState<boolean>(true);
  const [loadingEducation, setLoadingEducation] = useState<boolean>(true);
  const [workExperience, setWorkExperience] = useState<WorkData["data"]>([]);
  const [education, setEducation] = useState<EducationData["data"]>([]);

  async function fetchEducationData() {
    setLoadingEducation(true);
    try {
      const response = await fetch("http://127.0.0.1:3000/degrees", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setEducation(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingEducation(false);
    }
  }

  async function fetchWorkData() {
    setLoadingWork(true);
    try {
      const response = await fetch("http://127.0.0.1:3000/work_experiences", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setWorkExperience(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingWork(false);
    }
  }

  useEffect(() => {
    fetchEducationData();
    fetchWorkData();
  }, []);

  return (
    <section>
      {loadingWork ? "loading" : JSON.stringify(workExperience)}
      <br />
      {loadingEducation ? "loading" : JSON.stringify(education)}
    </section>
  );
};
