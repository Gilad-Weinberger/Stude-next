import type { Metadata } from "next";
import { Exams } from "@/lib/data";

export const metadata: Metadata = {
  title: "Stude | Assignments",
  description: "Stude Assignments Page",
};

export default function Page() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Date</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {Exams.map((exam) => {
          const date = new Date(exam.date);
          const hasTime = date.getHours() !== 0 || date.getMinutes() !== 0;
          const dateString = date.toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });
          const timeString = hasTime
            ? date.toLocaleString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "";
          return (
            <tr key={exam.id}>
              <td>{exam.name}</td>
              <td>{exam.class.title}</td>
              <td>{`${dateString} ${timeString}`.trim()}</td>
              <td>{exam.grade}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
