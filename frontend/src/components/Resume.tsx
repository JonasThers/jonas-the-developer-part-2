import { useState, useEffect } from "react";

export interface EducationData {
  data: {
    id: number;
    title: string;
    university: string;
    elective: string;
    start: string;
    end: string;
  }[];
}

export interface WorkData {
  data: {
    id: number;
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
      <div>
        <h2>Education</h2>
        {loadingEducation
          ? "Loading"
          : education.map((education) => {
              return (
                <div key={education.id}>
                  <h4>{education.title}</h4>
                  <p>- From {education.university}</p>
                  <p>- Electives: {education.elective}</p>
                </div>
              );
            })}
      </div>
      
      <div>
        <h2>Work Experience</h2>
        {loadingWork
          ? "Loading"
          : workExperience.map((work) => {
              return (
                <div key={work.id}>
                  <h4>{work.title}</h4>
                  <p>- At {work.workplace}</p>
                  <p>
                    - {work.start} - {work.end}
                  </p>
                  <p>- Technologies used: {work.technologies_used}</p>
                </div>
              );
            })}
      </div>
    </section>
  );
};
