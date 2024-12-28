import type { Metadata } from "next";
import { Assignments } from "@/lib/data";

export const metadata: Metadata = {
  title: "Stude | Exams",
  description: "Stude Exams Page",
};

export default function Page() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Description</th>
          <th>Created (Not Editable)</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {Assignments.map((assignment) => (
          <tr key={assignment.id}>
            <td>{assignment.name}</td>
            <td>{assignment.class.title}</td>
            <td>{assignment.description}</td>
            <td>
              {assignment.date_created.toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td>
              {assignment.due_date.toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td>{assignment.statue}</td>
            <td>{assignment.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
