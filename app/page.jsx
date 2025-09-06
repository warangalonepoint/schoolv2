"use client";
import Header from "@/components/header";
import Banner from "@/components/banner";
import SectionTiles from "@/components/section-tiles";
import SubjectList from "@/components/subject-list";
import FeeCard from "@/components/fee-card";
import { getStudentForDemo, getFees } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function Home() {
  const [student, setStudent] = useState(null);
  const [fees, setFees] = useState({ due: [] });

  useEffect(() => {
    (async () => {
      const s = await getStudentForDemo();
      setStudent(s);
      if (s?.id) setFees(await getFees(s.id));
    })();
  }, []);

  const firstDue = fees?.due?.[0];

  return (
    <>
      <Header student={student} />
      <div style={{ height: 12 }} />
      <Banner />
      <div style={{ height: 12 }} />
      <SectionTiles />
      <div style={{ height: 12 }} />
      <FeeCard dueAmount={firstDue?.amount_due} dueDate={firstDue?.due_date} />
      <div style={{ height: 12 }} />
      <div className="small" style={{ marginBottom: 8, fontWeight: 700 }}>Student Subjects</div>
      <SubjectList />
      <div style={{ height: 24 }} />
      <div className="small">© {new Date().getFullYear()} CampusOne</div>
    </>
  );
}
